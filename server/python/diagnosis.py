import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import openai
import os
import json
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Load model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "EfficientNetB3-skin disease-83.32.h5")
model = load_model(MODEL_PATH)

# Define class labels
CLASS_LABELS = [
    "Eczema", "Warts Molluscum and other Viral Infections", "Melanoma",
    "Atopic Dermatitis", "Basal Cell Carcinoma (BCC)", "Melanocytic Nevi (NV)",
    "Benign Keratosis-like Lesions (BKL)", "Psoriasis / Lichen Planus",
    "Seborrheic Keratoses", "Tinea Ringworm / Fungal Infections"
]

# Image preprocessing
def preprocess_image(image_path):
    image = Image.open(image_path).convert("RGB").resize((300, 300))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)
    return image_array

# Predict skin disease
def predict_image(image_path):
    processed_image = preprocess_image(image_path)
    prediction = model.predict(processed_image)
    predicted_class = np.argmax(prediction, axis=1)[0]
    return CLASS_LABELS[predicted_class]

# Get AI advice
def get_gpt_advice(diagnosis):
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        return "Error: OpenAI API key is missing."

    openai.api_key = api_key

    messages = [
        {"role": "system", "content": "You are an experienced dermatologist providing easy-to-understand medical advice."},
        {"role": "user", "content": f"A patient was diagnosed with {diagnosis}. Provide an explanation and treatment recommendations."}
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages,
        max_tokens=200
    )

    return response["choices"][0]["message"]["content"]

# Main execution
if __name__ == "__main__":
    import sys
    image_path = sys.argv[1]  # Get image path from command-line argument
    
    try:
        diagnosis = predict_image(image_path)
        advice = get_gpt_advice(diagnosis)
        print(f"Diagnosis: {diagnosis}")
        result = {"diagnosis": diagnosis, "advice": advice}
        print(json.dumps(result))  # Print JSON output for Node.js
    except Exception as e:
        print(json.dumps({"error": str(e)}))