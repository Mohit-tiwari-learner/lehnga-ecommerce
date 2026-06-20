import os
import fitz  # PyMuPDF
import re

pdf_dir = r"C:\Users\LENOVO\OneDrive\Desktop\lehnga ecommerce\nakhrali\public\photos"
output_dir = r"C:\Users\LENOVO\OneDrive\Desktop\lehnga ecommerce\nakhrali\public\extracted_photos"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Get all pdfs
pdfs = [f for f in os.listdir(pdf_dir) if f.lower().endswith(".pdf")]

for pdf_file in pdfs:
    pdf_path = os.path.join(pdf_dir, pdf_file)
    folder_name = os.path.splitext(pdf_file)[0]
    
    out_folder = os.path.join(output_dir, folder_name)
    if not os.path.exists(out_folder):
        os.makedirs(out_folder)
        
    print(f"Processing {pdf_file}...")
    doc = fitz.open(pdf_path)
    
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        # Increase resolution slightly (dpi=150 is good for web)
        pix = page.get_pixmap(dpi=150)
        img_path = os.path.join(out_folder, f"page-{page_num}.png")
        pix.save(img_path)
        
    doc.close()

print("All PDFs extracted successfully!")
