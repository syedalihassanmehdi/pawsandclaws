export interface SurgicalSubService {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const surgicalSubServices: SurgicalSubService[] = [
  {
    slug: "spay-neuter-surgery",
    title: "Pet Spay & Neuter Surgery",
    tagline: "Safe, routine reproductive surgery for lifelong health",
    description: "Routine reproductive surgeries performed with full anesthetic monitoring, pre-op bloodwork, and multi-modal pain management for a smooth, safe recovery.",
    longDescription: "Spaying and neutering are among the most common and beneficial surgeries we perform. Beyond preventing unwanted litters, these procedures significantly reduce the risk of certain cancers, eliminate the risk of pyometra, and reduce hormone-driven behavioral issues. Our team uses modern anesthetic protocols, thorough pre-operative screening, and dedicated post-op care to ensure every patient recovers quickly and comfortably.",
    image: "/neuter-surgery.png",
    features: [
      { title: "Pre-Operative Bloodwork", description: "Comprehensive blood panel before surgery to assess organ function, clotting ability, and anesthetic risk — ensuring your pet is safe to proceed." },
      { title: "Modern Anesthetic Protocols", description: "We use multimodal anesthesia with gas maintenance, IV catheter, and fluids throughout — minimizing risk and ensuring stable depth of anesthesia." },
      { title: "Dedicated Anesthetic Nurse", description: "A trained nurse monitors ECG, blood pressure, SpO2, capnography, and temperature continuously from induction through recovery." },
      { title: "Minimally Invasive Technique", description: "Procedures are performed using the smallest incisions appropriate, with careful tissue handling to minimize post-op discomfort and speed healing." },
      { title: "Multi-Modal Pain Management", description: "Pre-operative nerve blocks, intraoperative local anesthesia, and post-op oral pain relief are combined to keep your pet comfortable throughout recovery." },
      { title: "Same-Day Discharge", description: "Most patients go home the same day with written aftercare instructions, a recovery collar, and a scheduled follow-up to check the incision site." },
    ],
    benefits: [
      { title: "Cancer Prevention", description: "Spaying before first heat dramatically reduces the risk of mammary tumors. Neutering eliminates testicular cancer risk entirely." },
      { title: "Eliminates Pyometra Risk", description: "Pyometra is a life-threatening uterine infection — spaying completely prevents this common and serious condition in female pets." },
      { title: "Behavioral Improvement", description: "Reduces roaming, aggression, marking, and mounting behaviors driven by reproductive hormones." },
    ],
    faqs: [
      { question: "What age should my pet be spayed or neutered?", answer: "Most dogs and cats are spayed or neutered between 4–6 months. However, for larger breeds, we may recommend waiting until 12–18 months. We'll advise based on your pet's breed and size." },
      { question: "How long is recovery?", answer: "Most pets recover fully within 10–14 days. We recommend restricted activity for the first week and use of a recovery collar to prevent licking the incision." },
      { question: "Is the surgery risky?", answer: "Spay and neuter are among the safest surgeries in veterinary medicine. Pre-op screening and modern anesthesia protocols make complications extremely rare." },
      { question: "Will my pet gain weight after surgery?", answer: "Hormonal changes after surgery can slightly reduce metabolic rate. We provide post-op dietary guidance to help maintain a healthy weight." },
    ],
  },
  {
    slug: "soft-tissue-surgery",
    title: "Pet Soft Tissue Surgery",
    tagline: "Expert surgical care for internal conditions",
    description: "Includes gastrointestinal procedures, bladder surgery, splenectomy, liver lobectomy, and thoracic surgery performed by experienced veterinary surgeons.",
    longDescription: "Soft tissue surgery encompasses a broad range of procedures involving the internal organs, skin, and body cavities. From emergency foreign body removal to planned splenectomies and thoracic procedures, our surgical team brings precision and experience to every case. We use advanced monitoring and modern surgical techniques to ensure the best possible outcomes.",
    image: "/tissue-surgery.png",
    features: [
      { title: "Foreign Body Removal", description: "Emergency or elective removal of swallowed objects from the esophagus, stomach, or intestines — preventing perforation, obstruction, and life-threatening complications." },
      { title: "Intestinal Resection & Anastomosis", description: "Removal of diseased, necrotic, or obstructed bowel segments with careful reconstruction to restore normal gastrointestinal continuity." },
      { title: "Bladder & Urinary Surgery", description: "Cystotomy for bladder stone removal, bladder tumor excision, and urethral procedures to restore normal urinary function." },
      { title: "Splenectomy", description: "Surgical removal of the spleen — most commonly performed for splenic masses or hemoabdomen — with careful vascular control and intraoperative monitoring." },
      { title: "Liver Lobectomy", description: "Removal of diseased liver lobes for mass excision or abscess drainage, performed with meticulous attention to hepatic vasculature and bile ducts." },
      { title: "Thoracic Surgery", description: "Procedures involving the chest cavity including lung lobectomy, chest wall reconstruction, and management of pleural effusion or pneumothorax." },
    ],
    benefits: [
      { title: "Life-Saving Capability", description: "Many soft tissue conditions are emergencies — having an experienced surgical team on site means your pet gets immediate, expert care." },
      { title: "Advanced Surgical Suite", description: "Our fully equipped OR includes electrosurgery, suction, and complete monitoring for even the most complex procedures." },
      { title: "Seamless Pre & Post Care", description: "Diagnostics, surgery, and recovery all happen in one facility — no stressful transfers or gaps in care." },
    ],
    faqs: [
      { question: "How do I know if my pet needs soft tissue surgery?", answer: "Signs like vomiting, bloating, difficulty breathing, blood in urine, or a palpable mass may indicate a surgical condition. A consultation and diagnostics will determine the best course of action." },
      { question: "How long does recovery take?", answer: "Recovery varies by procedure. Minor surgeries may take 1–2 weeks while major abdominal or thoracic procedures can require 4–6 weeks of restricted activity." },
      { question: "Will my pet need to stay overnight?", answer: "Most soft tissue surgeries require at least one overnight stay for monitoring. Complex cases may need several days in our ICU." },
      { question: "Are these surgeries performed under general anesthesia?", answer: "Yes — all soft tissue procedures are performed under full general anesthesia with continuous monitoring by a dedicated anesthetic nurse." },
    ],
  },
  {
    slug: "orthopedic-procedures",
    title: "Pet Orthopedic Procedures",
    tagline: "Restoring mobility and quality of life",
    description: "Fracture repair, cruciate ligament repair, luxating patella correction, and other orthopedic procedures performed by our experienced surgical team.",
    longDescription: "Orthopedic conditions can severely impact your pet's mobility, comfort, and quality of life. Our veterinary surgical team is experienced in a wide range of bone and joint procedures, from fracture repair to complex ligament reconstruction. We use modern implants, imaging guidance, and comprehensive rehabilitation support to give every patient the best possible functional outcome.",
    image: "/orthopedic-procedures.png",
    features: [
      { title: "Fracture Repair", description: "Internal fixation using bone plates, screws, intramedullary pins, and external skeletal fixators — chosen based on fracture type, location, and patient size for optimal healing." },
      { title: "TPLO / TTA — Cruciate Repair", description: "Tibial Plateau Leveling Osteotomy (TPLO) and Tibial Tuberosity Advancement (TTA) are gold-standard procedures for cranial cruciate ligament rupture in dogs." },
      { title: "Luxating Patella Correction", description: "Surgical realignment of the kneecap through trochleoplasty, tibial tuberosity transposition, and soft tissue reconstruction to restore normal patellar tracking." },
      { title: "Femoral Head Ostectomy (FHO)", description: "Removal of the femoral head and neck to eliminate painful bone-on-bone contact in hip dysplasia or femoral head necrosis, allowing a functional false joint to form." },
      { title: "Joint Arthroscopy", description: "Minimally invasive camera-guided examination and treatment of joint pathology including OCD lesions, fragmented coronoid processes, and joint mice." },
      { title: "Post-Op Rehabilitation Planning", description: "Every orthopedic patient receives a structured rehabilitation plan including controlled exercise, hydrotherapy guidance, and laser therapy to maximize recovery." },
    ],
    benefits: [
      { title: "Restored Mobility", description: "Most orthopedic patients return to normal or near-normal activity levels following surgery and rehabilitation." },
      { title: "Pain Elimination", description: "Surgical correction addresses the structural cause of pain — not just the symptoms — providing lasting relief." },
      { title: "Modern Implants", description: "We use veterinary-grade implants from leading manufacturers, sized and selected specifically for each patient." },
    ],
    faqs: [
      { question: "How do I know if my pet needs orthopedic surgery?", answer: "Limping, reluctance to bear weight, swelling around a joint, or sudden inability to use a limb after trauma are common signs. X-rays and a physical exam will confirm the diagnosis." },
      { question: "What is the success rate for TPLO?", answer: "TPLO has an excellent outcome rate — over 90% of dogs return to normal or near-normal function within 4–6 months of surgery with proper rehabilitation." },
      { question: "How long is recovery from fracture repair?", answer: "Most fractures heal within 8–12 weeks. Activity restriction and follow-up X-rays are essential to monitor healing and implant position." },
      { question: "Will my pet need physiotherapy after surgery?", answer: "Yes — structured rehabilitation is a key part of orthopedic recovery. We provide a tailored home exercise program and can refer to a veterinary physiotherapist if needed." },
    ],
  },
  {
    slug: "tumor-mass-removal",
    title: "Pet Tumor & Mass Removal",
    tagline: "Precise excision with thorough diagnostic follow-up",
    description: "Excision of cutaneous, subcutaneous, and internal masses with clean margin assessment and histopathology submission for definitive diagnosis.",
    longDescription: "Discovering a lump or mass on your pet can be alarming. Our surgical team performs thorough excisions of skin, subcutaneous, and internal tumors with a focus on achieving clean margins and minimizing recurrence. Every removed mass is submitted for histopathology so you receive a definitive diagnosis and guidance on further treatment if needed.",
    image: "/mass-removal.png",
    features: [
      { title: "Pre-Surgical Staging", description: "Imaging and fine needle aspirate cytology to assess mass type and check for regional lymph node involvement or distant spread before planning the surgery." },
      { title: "Wide Margin Excision", description: "Removal of the mass with an appropriate margin of normal tissue around it — critical for preventing local recurrence of malignant tumors." },
      { title: "Mammary Tumor Removal", description: "Single or chain mammary gland removal for mammary neoplasia, with lymph node sampling when indicated to assess metastatic risk." },
      { title: "Internal Tumor Resection", description: "Removal of internal masses affecting the spleen, liver, intestines, or other organs, often in conjunction with imaging-guided pre-operative planning." },
      { title: "Histopathology Submission", description: "Every excised mass is submitted to a veterinary pathology lab for definitive diagnosis — providing tumor type, grade, and margin assessment to guide follow-up care." },
      { title: "Oncology Referral Coordination", description: "If chemotherapy, radiation, or specialist oncology care is indicated based on pathology results, we coordinate seamless referral to a veterinary oncologist." },
    ],
    benefits: [
      { title: "Definitive Diagnosis", description: "Histopathology gives you a clear answer on what the mass was — benign or malignant — and guides all future treatment decisions." },
      { title: "Early Intervention", description: "Removing masses early, before they grow or spread, significantly improves outcomes for many tumor types." },
      { title: "Complete Care Pathway", description: "From pre-surgical staging through pathology results and oncology referral if needed — we manage the entire process." },
    ],
    faqs: [
      { question: "Should every lump be removed?", answer: "Not necessarily — some lumps can be monitored if cytology confirms they are benign. We'll advise based on the mass type, location, growth rate, and your pet's overall health." },
      { question: "How long does surgery take?", answer: "Simple skin mass removals may take 20–40 minutes. Complex internal tumor resections can take 1–3 hours depending on location and size." },
      { question: "When will I get histopathology results?", answer: "Results typically take 5–7 business days. We'll contact you as soon as they arrive and discuss what the findings mean for your pet's ongoing care." },
      { question: "What if the margins are not clean?", answer: "If pathology confirms incomplete excision of a malignant tumor, we'll discuss options including re-excision, radiation therapy, or oncology referral depending on the tumor type." },
    ],
  },
  
];

export function getSurgicalSubServiceBySlug(slug: string): SurgicalSubService | undefined {
  return surgicalSubServices.find((s) => s.slug === slug);
}
