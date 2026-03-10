export interface ServiceFeature {
      title: string;
      description: string;
    }
    
    export interface Service {
      slug: string;
      title: string;
      tagline: string;
      description: string;
      longDescription: string;
      image: string;
      color: string;
      features: ServiceFeature[];
      benefits: { title: string; description: string }[];
      faqs: { question: string; answer: string }[];
      relatedSlugs: string[];
      icon: string;
    }
    
    export const services: Service[] = [
      {
        slug: "pet-consultation",
        title: "Pet Consultation",
        tagline: "Comprehensive health examinations for your pet",
        description: "Complete health checkups to monitor your pet's overall wellness and catch potential issues early.",
        longDescription: "Our pet consultation service provides a thorough assessment of your pet's health from nose to tail. Our experienced veterinarians take time to understand your pet's lifestyle, diet, and any concerns you may have, creating a personalized health plan tailored to their unique needs.",
        image: "/services/consultation.png",
        color: "#f57c20",
        features: [
          { title: "Complete Physical Examination", description: "A thorough nose-to-tail assessment covering eyes, ears, teeth, coat, skin, joints, and internal organs to establish a full health baseline." },
          { title: "Weight & Vital Signs Monitoring", description: "We record weight, temperature, heart rate, and respiratory rate, comparing against breed norms to detect early signs of concern." },
          { title: "Personalized Health Recommendations", description: "Based on your pet's age, breed, and lifestyle, our vet creates a tailored wellness plan covering diet, exercise, and preventive care." },
          { title: "Vaccination Review & Planning", description: "We review your pet's vaccination history and recommend a schedule for core and lifestyle-specific boosters to keep immunity current." },
          { title: "Diet & Nutrition Counseling", description: "Our vets assess your pet's current diet and provide evidence-based nutrition guidance, including portion control and supplement recommendations." },
          { title: "Behavioral Health Discussion", description: "We discuss any behavioral changes you've noticed — anxiety, aggression, lethargy — and advise on behavioral support or specialist referral." },
        ],
        benefits: [
          { title: "Early Detection", description: "Catch health issues before they become serious problems." },
          { title: "Personalized Plans", description: "Tailored health plans based on your pet's age, breed, and lifestyle." },
          { title: "Expert Advice", description: "Get answers to all your pet health questions from certified vets." },
        ],
        faqs: [
          { question: "How often should I bring my pet for a checkup?", answer: "We recommend annual checkups for healthy adult pets and bi-annual visits for seniors (7+ years) or pets with ongoing conditions." },
          { question: "What should I bring to the consultation?", answer: "Bring any previous medical records, a list of current medications, and notes about any behavioral or health changes you've noticed." },
        ],
        relatedSlugs: ["vaccination-programs", "in-house-diagnostics", "dental-care"],
        icon: "M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3",
      },
      {
        slug: "in-house-diagnostics",
        title: "In-House Diagnostics",
        tagline: "Fast, accurate results without the wait",
        description: "State-of-the-art on-site diagnostic testing for accurate and timely results when your pet needs it most.",
        longDescription: "Our fully equipped in-house laboratory allows us to run comprehensive diagnostic tests and receive results within minutes — not days. From blood panels to urinalysis, our advanced equipment ensures your pet gets an accurate diagnosis quickly so treatment can begin without delay.",
        image: "/services/diagnostics.png",
        color: "#7c6fcd",
        features: [
          { title: "Complete Blood Count (CBC)", description: "Measures red and white blood cell counts and platelets to detect infections, anemia, clotting disorders, and immune system abnormalities." },
          { title: "Blood Chemistry Panels", description: "Evaluates kidney function, liver enzymes, blood sugar, electrolytes, and proteins — critical for diagnosing organ disease and metabolic conditions." },
          { title: "Urinalysis", description: "Examines urine concentration, pH, and the presence of protein, glucose, blood, or bacteria to assess kidney and bladder health." },
          { title: "Parasite Screening", description: "Fecal exams to detect intestinal parasites including roundworms, hookworms, giardia, and coccidia, with same-visit results and treatment." },
          { title: "Digital X-Rays", description: "High-resolution radiographs reviewed instantly on-screen by our vets, covering chest, abdomen, and skeletal structures with minimal radiation exposure." },
          { title: "Ultrasound Imaging", description: "Real-time soft tissue imaging of internal organs including heart, liver, kidneys, bladder, and reproductive organs, without the need for surgery." },
        ],
        benefits: [
          { title: "Same-Day Results", description: "No waiting days for results — most tests are completed within the hour." },
          { title: "Accurate Diagnosis", description: "Advanced equipment ensures precise, reliable diagnostic results." },
          { title: "Faster Treatment", description: "Quick results mean your pet starts treatment sooner." },
        ],
        faqs: [
          { question: "How long do diagnostic results take?", answer: "Most in-house tests are completed within 30–60 minutes. Complex panels may take a few hours." },
          { question: "Does my pet need to fast before bloodwork?", answer: "For most blood panels, fasting for 8–12 hours is recommended. We'll advise you when booking." },
        ],
        relatedSlugs: ["pcr-testing", "advanced-imaging", "pet-consultation"],
        icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5",
      },
      {
        slug: "pcr-testing",
        title: "PCR Testing",
        tagline: "Precise molecular testing for accurate diagnosis",
        description: "Advanced PCR molecular testing to detect infectious diseases, viruses, and bacteria with the highest accuracy.",
        longDescription: "PCR (Polymerase Chain Reaction) testing is the gold standard for detecting infectious diseases in pets. Our advanced PCR lab can identify pathogens at the molecular level, providing highly accurate diagnoses for a wide range of conditions including respiratory infections, tick-borne diseases, and more.",
        image: "/services/pcr.png",
        color: "#2a9d8f",
        features: [
          { title: "Viral Disease Detection", description: "Identifies viral pathogens including parvovirus, distemper, feline herpesvirus, calicivirus, and FIV/FeLV with near 100% sensitivity." },
          { title: "Bacterial Pathogen Testing", description: "Detects bacterial infections such as Bordetella, Leptospira, Mycoplasma, and Bartonella directly from samples without culture delays." },
          { title: "Tick-Borne Disease Panel", description: "Screens for Lyme disease (Borrelia), Ehrlichia, Anaplasma, and Rocky Mountain spotted fever from a single blood sample." },
          { title: "Respiratory Pathogen Panel", description: "Comprehensive screening for canine infectious respiratory disease complex (CIRDC) and feline upper respiratory pathogens in one test." },
          { title: "Gastrointestinal Pathogen Panel", description: "Detects Giardia, Cryptosporidium, Clostridium, Campylobacter, and Salmonella causing diarrhea or vomiting with high precision." },
          { title: "Rapid Turnaround", description: "Most PCR panels are processed within 24–48 hours, with priority testing available for critical cases requiring same-day results." },
        ],
        benefits: [
          { title: "Highest Accuracy", description: "PCR detects even tiny amounts of pathogen DNA for definitive results." },
          { title: "Wide Coverage", description: "Tests for a broad spectrum of infectious diseases in one panel." },
          { title: "Peace of Mind", description: "Conclusive results eliminate guesswork in diagnosis." },
        ],
        faqs: [
          { question: "What diseases can PCR detect?", answer: "PCR can detect a wide range including parvovirus, distemper, Lyme disease, Ehrlichia, Anaplasma, and many respiratory pathogens." },
          { question: "How is the sample collected?", answer: "Depending on the test, we may use blood, swabs, or other samples. The process is quick and minimally stressful for your pet." },
        ],
        relatedSlugs: ["in-house-diagnostics", "advanced-imaging", "pet-consultation"],
        icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25",
      },
      {
        slug: "advanced-imaging",
        title: "Advanced Imaging",
        tagline: "See what's happening inside with clarity",
        description: "Digital X-rays, ultrasound, and advanced imaging to give our vets a clear picture of your pet's internal health.",
        longDescription: "Our advanced imaging suite includes digital radiography and high-resolution ultrasound equipment. These non-invasive tools allow our veterinarians to examine bones, organs, and soft tissues in detail, enabling accurate diagnosis of fractures, tumors, organ disease, and more — without surgery.",
        image: "/services/imaging.png",
        color: "#e05c7a",
        features: [
          { title: "Digital Radiography (X-Ray)", description: "Full-body digital X-rays with instant on-screen review. Far lower radiation than traditional film, with the ability to zoom, enhance, and share images with specialists." },
          { title: "Abdominal Ultrasound", description: "Real-time assessment of liver, spleen, kidneys, bladder, intestines, and adrenal glands. Ideal for detecting masses, fluid, stones, and organ enlargement." },
          { title: "Cardiac Echocardiography", description: "Detailed heart imaging measuring chamber size, wall thickness, valve function, and blood flow — essential for diagnosing heart disease and monitoring cardiac patients." },
          { title: "Musculoskeletal Imaging", description: "High-resolution views of joints, bones, and soft tissues to diagnose fractures, arthritis, ligament injuries, and developmental abnormalities in growing pets." },
          { title: "Thoracic Imaging", description: "Chest X-rays and ultrasound to evaluate lung fields, pleural space, and mediastinum — critical for detecting pneumonia, tumors, and pleural effusion." },
          { title: "Guided Fine Needle Aspirates", description: "Ultrasound-guided sampling of masses, lymph nodes, or fluid collections for cytology, providing a minimally invasive route to definitive tissue diagnosis." },
        ],
        benefits: [
          { title: "Non-Invasive", description: "Get detailed internal views without any surgical procedures." },
          { title: "Instant Results", description: "Digital imaging provides immediate, high-quality images for review." },
          { title: "Comprehensive View", description: "Evaluate bones, organs, and soft tissues in a single session." },
        ],
        faqs: [
          { question: "Is sedation required for imaging?", answer: "Most pets tolerate X-rays without sedation. Ultrasound may require mild sedation for anxious pets or complex exams." },
          { question: "How long does an imaging session take?", answer: "Typically 20–45 minutes depending on the type and extent of imaging required." },
        ],
        relatedSlugs: ["in-house-diagnostics", "surgical-services", "pcr-testing"],
        icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75",
      },
      {
        slug: "intensive-care",
        title: "Intensive Care (ICU)",
        tagline: "Round-the-clock critical care when it matters most",
        description: "24/7 intensive care unit for critically ill pets requiring continuous monitoring and advanced life support.",
        longDescription: "Our dedicated ICU provides round-the-clock care for pets in critical condition. Equipped with advanced monitoring systems, oxygen support, IV fluid therapy, and staffed by experienced critical care specialists, our ICU gives your pet the best possible chance of recovery.",
        image: "/services/icu.png",
        color: "#e05c7a",
        features: [
          { title: "24/7 Continuous Monitoring", description: "Dedicated nursing staff monitor vital signs — heart rate, blood pressure, oxygen saturation, temperature, and respiratory rate — around the clock without interruption." },
          { title: "Oxygen Therapy & Ventilation", description: "Oxygen cages, nasal cannulas, and mechanical ventilation support for patients with respiratory compromise, ensuring adequate oxygenation at all times." },
          { title: "IV Fluid & Electrolyte Management", description: "Precise IV fluid therapy with constant-rate infusions of fluids, electrolytes, dextrose, and medications using syringe drivers and fluid pumps." },
          { title: "Cardiac & Blood Pressure Monitoring", description: "Continuous ECG monitoring and automated blood pressure measurement to detect arrhythmias and hemodynamic instability early." },
          { title: "Blood Transfusions & Plasma Therapy", description: "On-site blood product administration for patients with severe anemia, clotting disorders, or hypoproteinemia, with compatible donor screening." },
          { title: "Critical Care Specialist Oversight", description: "Board-certified critical care veterinarians oversee every ICU patient, with treatment plans reviewed and updated multiple times daily." },
        ],
        benefits: [
          { title: "Constant Monitoring", description: "Your pet is watched around the clock by trained professionals." },
          { title: "Advanced Equipment", description: "State-of-the-art life support and monitoring technology." },
          { title: "Specialist Care", description: "Critical care veterinarians manage each patient's treatment plan." },
        ],
        faqs: [
          { question: "Can I visit my pet in the ICU?", answer: "Yes, we encourage family visits as they aid recovery. Visiting hours are flexible and can be arranged with our team." },
          { question: "How will I be kept informed?", answer: "Our team provides regular updates and is available for calls anytime. We believe in keeping families informed at every step." },
        ],
        relatedSlugs: ["surgical-services", "advanced-imaging", "in-house-diagnostics"],
        icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
      },
      {
        slug: "dental-care",
        title: "Dental Care",
        tagline: "Healthy teeth, happy pets",
        description: "Complete oral health services including professional cleanings, extractions, and preventive dental care.",
        longDescription: "Dental disease is one of the most common health issues in pets, yet it's largely preventable. Our comprehensive dental care services include professional cleanings under anesthesia, dental X-rays, tooth extractions when needed, and personalized home care plans to keep your pet's smile healthy.",
        image: "/services/dental.png",
        color: "#f5c842",
        features: [
          { title: "Professional Dental Cleaning (COHAT)", description: "A complete oral health assessment and treatment under general anesthesia, including supragingival and subgingival scaling, polishing, and irrigation of all tooth surfaces." },
          { title: "Full-Mouth Dental Radiographs", description: "Digital intraoral X-rays of every tooth, revealing root resorption, bone loss, abscesses, and pathology invisible to the naked eye — standard at every cleaning." },
          { title: "Tooth Extractions", description: "Surgical extraction of fractured, infected, or resorbed teeth using proper nerve blocks and extraction techniques, followed by gingival closure for rapid healing." },
          { title: "Periodontal Therapy", description: "Subgingival curettage, root planing, and application of local antimicrobials to treat periodontal pockets and preserve teeth affected by gum disease." },
          { title: "Oral Mass Evaluation & Biopsy", description: "Examination and sampling of any oral growths, ulcers, or abnormal tissue for cytology or histopathology to rule out benign vs. malignant conditions." },
          { title: "Home Dental Care Plan", description: "Customized brushing and oral hygiene plan with product recommendations — toothpaste, dental chews, water additives — to maintain your pet's oral health between visits." },
        ],
        benefits: [
          { title: "Prevent Disease", description: "Regular cleanings prevent periodontal disease and tooth loss." },
          { title: "Reduce Pain", description: "Address dental pain that pets often hide until it becomes severe." },
          { title: "Better Overall Health", description: "Oral health directly impacts heart, kidney, and liver health." },
        ],
        faqs: [
          { question: "Does my pet need anesthesia for cleaning?", answer: "Yes, safe and effective dental cleaning requires anesthesia. We perform thorough pre-anesthetic screening to ensure safety." },
          { question: "How often should my pet have a dental cleaning?", answer: "Most pets benefit from annual professional cleanings, though some breeds may need more frequent care." },
        ],
        relatedSlugs: ["pet-consultation", "surgical-services", "in-house-diagnostics"],
        icon: "M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z",
      },
      {
        slug: "laser-therapy",
        title: "Laser Therapy",
        tagline: "Pain relief and healing through light",
        description: "Non-invasive therapeutic laser treatments to reduce pain, inflammation, and accelerate healing.",
        longDescription: "Cold laser therapy (photobiomodulation) uses specific wavelengths of light to stimulate cellular regeneration, reduce inflammation, and relieve pain. It's a safe, drug-free option for managing arthritis, post-surgical recovery, wounds, and chronic pain conditions in pets of all ages.",
        image: "/services/laser.png",
        color: "#4caf82",
        features: [
          { title: "Osteoarthritis & Joint Pain Management", description: "Targeted laser application to affected joints reduces synovial inflammation, stimulates cartilage repair, and significantly improves mobility in arthritic pets." },
          { title: "Post-Surgical Wound Healing", description: "Accelerates incision healing by stimulating collagen synthesis, reducing post-op swelling, and decreasing the need for opioid pain medications after surgery." },
          { title: "Acute Wound & Trauma Treatment", description: "Promotes rapid closure of lacerations, bite wounds, hot spots, and skin infections by boosting local circulation and cellular repair mechanisms." },
          { title: "Intervertebral Disc Disease (IVDD)", description: "Laser therapy along the spine reduces disc-related nerve inflammation and neuropathic pain, used as an adjunct to medical or surgical IVDD management." },
          { title: "Ear & Dermatological Conditions", description: "Treats chronic otitis externa, lick granulomas, and other inflammatory skin conditions by reducing pruritus, bacterial load, and tissue inflammation." },
          { title: "Rehabilitation & Recovery Support", description: "Integrated into our rehab protocols to support muscle recovery, reduce disuse atrophy, and improve outcomes following orthopedic surgeries or neurological events." },
        ],
        benefits: [
          { title: "Drug-Free Relief", description: "Effective pain management without relying on medications." },
          { title: "Non-Invasive", description: "Completely painless procedure that most pets find relaxing." },
          { title: "Fast Results", description: "Many pets show improvement after just a few sessions." },
        ],
        faqs: [
          { question: "Is laser therapy painful for my pet?", answer: "Not at all — most pets find it relaxing and comfortable. Many fall asleep during treatment sessions." },
          { question: "How many sessions are needed?", answer: "Acute conditions may need 3–6 sessions; chronic conditions benefit from ongoing maintenance therapy." },
        ],
        relatedSlugs: ["surgical-services", "pet-consultation", "intensive-care"],
        icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
      },
      {
        slug: "vaccination-programs",
        title: "Vaccination Programs",
        tagline: "Protection for every stage of life",
        description: "Comprehensive immunization programs tailored to your pet's lifestyle, age, and specific health needs.",
        longDescription: "Our vaccination programs are carefully designed around your pet's individual needs. We consider your pet's age, lifestyle, risk factors, and previous vaccination history to create an optimal schedule that provides maximum protection while avoiding unnecessary vaccines.",
        image: "/services/vaccination.png",
        color: "#f57c20",
        features: [
          { title: "Core Vaccine Administration", description: "Essential vaccines for all dogs (DA2PP, Rabies) and cats (FVRCP, Rabies) administered on evidence-based schedules proven to provide long-lasting, reliable immunity." },
          { title: "Lifestyle & Risk-Based Vaccines", description: "Additional vaccines recommended based on your pet's exposure risk — Bordetella, Leptospirosis, Lyme, Canine Influenza for dogs; FeLV for outdoor or multi-cat household cats." },
          { title: "Puppy & Kitten Series", description: "Age-appropriate vaccine series starting from 6–8 weeks, with boosters every 3–4 weeks until 16 weeks of age, building a strong primary immune foundation." },
          { title: "Titer Testing Option", description: "Serum antibody titer testing to measure existing immunity levels, allowing us to determine whether boosters are truly needed rather than vaccinating on a fixed schedule." },
          { title: "Vaccination Records & Reminders", description: "Digital vaccination certificates issued after every visit, with proactive reminders sent when boosters are due to keep your pet's protection current." },
          { title: "Post-Vaccination Monitoring", description: "We monitor your pet for 15–20 minutes after vaccination and provide clear guidance on what to watch for at home, with same-day callback support available." },
        ],
        benefits: [
          { title: "Complete Protection", description: "Guard against life-threatening diseases with proven vaccines." },
          { title: "Tailored Schedules", description: "Custom vaccination plans based on your pet's specific needs." },
          { title: "Lifelong Immunity", description: "Properly timed boosters maintain strong, lasting protection." },
        ],
        faqs: [
          { question: "Which vaccines does my pet need?", answer: "Core vaccines are recommended for all pets. Additional vaccines depend on lifestyle factors like outdoor access, travel, and exposure to other animals." },
          { question: "Are vaccines safe?", answer: "Yes — vaccines undergo rigorous testing. Side effects are rare and typically mild. We monitor your pet after vaccination." },
        ],
        relatedSlugs: ["pet-consultation", "in-house-diagnostics", "in-house-pharmacy"],
        icon: "m18 2 4 4-14 14H4v-4Z M14.5 5.5l4 4 M3 22l3-3",
      },
      {
        slug: "surgical-services",
        title: "Surgical Services",
        tagline: "Expert surgery with compassionate care",
        description: "Safe, professional surgical procedures performed by board-certified veterinary surgeons in a fully equipped OR.",
        longDescription: "Our surgical suite is equipped with the latest technology to ensure the safest possible outcomes for your pet. From routine spay/neuter procedures to complex soft tissue and orthopedic surgeries, our board-certified surgeons bring expertise and precision to every procedure.",
        image: "/services/surgery.png",
        color: "#7c6fcd",
        features: [
          { title: "Spay & Neuter Surgery", description: "Routine reproductive surgeries performed with full anesthetic monitoring, pre-op bloodwork, and multi-modal pain management for a smooth, safe recovery." },
          { title: "Soft Tissue Surgery", description: "Includes gastrointestinal procedures (foreign body removal, intestinal resection), bladder surgery, splenectomy, liver lobectomy, and thoracic surgery." },
          { title: "Orthopedic Procedures", description: "Fracture repair with plates, pins, and external fixators; cruciate ligament repair (TPLO/TTA); luxating patella correction; and femoral head ostectomy (FHO)." },
          { title: "Tumor & Mass Removal", description: "Excision of cutaneous and subcutaneous masses, mammary tumors, and internal neoplasia with clean margin assessment and histopathology submission." },
          { title: "Anesthetic Monitoring & Safety", description: "Every patient is monitored by a dedicated anesthetic nurse tracking ECG, blood pressure, SpO2, capnography, and temperature throughout the procedure." },
          { title: "Post-Operative Care & Recovery", description: "Dedicated recovery area with heated blankets, IV fluid support, and pain scoring. Discharge includes written aftercare instructions and a follow-up appointment." },
        ],
        benefits: [
          { title: "Board-Certified Surgeons", description: "Our surgeons hold the highest level of veterinary surgical certification." },
          { title: "Advanced Monitoring", description: "Continuous vital sign monitoring throughout every procedure." },
          { title: "Comprehensive Care", description: "Full pre-operative assessment and dedicated post-op recovery care." },
        ],
        faqs: [
          { question: "How should I prepare my pet for surgery?", answer: "Fast your pet for 8–12 hours before surgery (no food or water). We'll provide complete pre-surgery instructions during your consultation." },
          { question: "How long is recovery after surgery?", answer: "Recovery varies by procedure. Most pets go home the same day. We provide detailed aftercare instructions and schedule follow-up visits." },
        ],
        relatedSlugs: ["intensive-care", "advanced-imaging", "laser-therapy"],
        icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5 M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.047 2.047",
      },
      {
        slug: "in-house-pharmacy",
        title: "In-House Pharmacy",
        tagline: "Medications and supplements, right here",
        description: "Convenient on-site pharmacy stocked with a comprehensive range of veterinary medications and supplements.",
        longDescription: "Our fully stocked in-house pharmacy means you can pick up your pet's prescriptions the same day they're prescribed — no separate trips to an outside pharmacy. We carry a wide range of veterinary medications, preventive treatments, prescription diets, and supplements, all at competitive prices.",
        image: "/services/pharmacy.png",
        color: "#4caf82",
        features: [
          { title: "Same-Day Prescription Dispensing", description: "Medications prescribed during your visit are dispensed before you leave — no waiting for external pharmacy processing or delivery delays." },
          { title: "Flea, Tick & Heartworm Prevention", description: "Full range of preventive treatments including spot-ons, oral tablets, and collars from leading brands, with expert guidance on the right choice for your pet." },
          { title: "Prescription Therapeutic Diets", description: "Veterinary prescription diets for kidney disease, urinary conditions, obesity, allergies, GI disorders, and joint health stocked for immediate purchase." },
          { title: "Supplements & Nutraceuticals", description: "Evidence-based joint supplements (glucosamine, omega-3s), probiotics, skin and coat supplements, and calming aids recommended by our veterinary team." },
          { title: "Compounded Medications", description: "Custom-formulated medications in flavored chews, liquids, or transdermal gels for pets that refuse tablets, or requiring non-standard doses not commercially available." },
          { title: "Medication Counseling", description: "Our team explains dosing, administration technique, potential side effects, and drug interactions for every dispensed medication before you leave the clinic." },
        ],
        benefits: [
          { title: "Convenience", description: "Pick up medications immediately after your appointment — no extra trips." },
          { title: "Expert Guidance", description: "Our team explains proper dosing and administration for every medication." },
          { title: "Competitive Pricing", description: "Fair prices on all medications and preventive treatments." },
        ],
        faqs: [
          { question: "Can I refill prescriptions without an appointment?", answer: "Yes — existing prescriptions can be refilled without an appointment. Simply call ahead or request online and pick up at your convenience." },
          { question: "Do you carry compounded medications?", answer: "Yes, we can arrange compounded medications for pets that need custom formulations, flavors, or dosage forms." },
        ],
        relatedSlugs: ["vaccination-programs", "pet-consultation", "laser-therapy"],
        icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z",
      },
    ];
    
    export function getServiceBySlug(slug: string): Service | undefined {
      return services.find((s) => s.slug === slug);
    }
    
    export function getRelatedServices(service: Service): Service[] {
      return service.relatedSlugs
        .map((slug) => services.find((s) => s.slug === slug))
        .filter(Boolean) as Service[];
    }