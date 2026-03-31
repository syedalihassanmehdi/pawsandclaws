export interface ServiceFeature {
  title: string;
  description: string;
}

export interface CrossLinkItem {
  heading: string;
  body: {
    text: string;
    link?: { label: string; slug: string };
  }[];
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
  crossLinks: {
    sectionTitle: string;
    sectionIntro: string;
    items: CrossLinkItem[];
  };
}

export const services: Service[] = [
  {
    slug: "pet-consultation",
    title: "Pet Consultation",
    tagline: "Comprehensive health examinations for your pet",
    description: "Complete health checkups to monitor your pet's overall wellness and catch potential issues early.",
    longDescription: "Our pet consultation service provides a thorough assessment of your pet's health from nose to tail. Our experienced veterinarians take time to understand your pet's lifestyle, diet, and any concerns you may have, creating a personalized health plan tailored to their unique needs.",
    image: "/petconsultation.png",
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
      { question: "What should I bring to the consultation?", answer: "Bring any previous health records, a list of current treatments your pet is receiving, and notes about any behavioral or health changes you've noticed." },
    ],
    relatedSlugs: ["vaccination-programs", "in-house-diagnostics", "dental-care"],
    icon: "M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3",
    crossLinks: {
      sectionTitle: "What We May Discover During Your Consultation",
      sectionIntro: "A routine examination is often where we first notice the early signs of something more significant. Our vets are trained to read subtle physical clues — a slightly enlarged lymph node, a hint of jaundice in the gums, a barely perceptible shift in muscle mass — that most owners would never think to mention. When those clues appear, the consultation becomes the first link in a chain of care rather than the end of it.",
      items: [
        {
          heading: "Lethargy, weight loss, or organ changes on palpation",
          body: [
            { text: "A pet that has been sleeping more than usual, losing weight without a diet change, or showing mild discomfort when the abdomen is pressed often has something quietly developing beneath the surface. When our vets notice these signs during your pet's exam, they'll typically recommend " },
            { link: { label: "same-day blood and urine tests", slug: "in-house-diagnostics" } },
            { text: " — results that can come back within the hour and immediately change how we approach treatment. If those panels suggest an infectious cause rather than a metabolic one, we extend the investigation with " },
            { link: { label: "pathogen testing", slug: "prc-testing" } },
            { text: ", rather than guessing at a cause that the test results will confirm far more precisely." },
          ],
        },
        {
          heading: "Tartar build-up, bad breath, or sensitive gums during the oral exam",
          body: [
            { text: "Owners often attribute their pet's bad breath to diet and rarely connect it to the swollen, receding gum line that sits underneath a thick layer of mineralised tartar. During a consultation, our vets examine every tooth and probe the gum margins — and what they find is often several years of progressive periodontal disease that has been silently inflaming tissue and seeding bacteria into the bloodstream. Pets identified this way are referred directly to our team for " },
            { link: { label: "gum disease treatment", slug: "dental-care" } },
            { text: ". If vaccines are also overdue — which is common when owners haven't visited the clinic in some time — we coordinate " },
            { link: { label: "overdue vaccination boosters", slug: "vaccination-programs" } },
            { text: " so your pet leaves with both oral health addressed and immunity restored." },
          ],
        },
        {
          heading: "An unexpected lump, swelling, or internal mass found during examination",
          body: [
            { text: "Finding a lump during a physical exam is an experience many owners dread — but discovering it early, before it has grown or spread, is exactly what annual consultations are designed to achieve. When our vet detects something on palpation that warrants investigation, the next step depends entirely on location and characteristics. Most cases move straight to " },
            { link: { label: "internal imaging", slug: "advanced-imaging" } },
            { text: ". If imaging confirms a surgically accessible lesion with no evidence of systemic spread, we discuss the options with you and plan a " },
            { link: { label: "tumour removal", slug: "surgical-services" } },
            { text: " — giving your pet the best possible chance of a complete outcome." },
          ],
        },
      ],
    },
  },
  {
    slug: "in-house-diagnostics",
    title: "Pet In-House Diagnostics",
    tagline: "Fast, accurate results without the wait",
    description: "State-of-the-art on-site diagnostic testing for accurate and timely results when your pet needs it most.",
    longDescription: "Our fully equipped in-house laboratory allows us to run comprehensive diagnostic tests and receive results within minutes — not days. From blood panels to urinalysis, our advanced equipment ensures your pet gets an accurate diagnosis quickly so treatment can begin without delay.",
    image: "/in-house-diagnostics.png",
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
    relatedSlugs: ["prc-testing", "advanced-imaging", "pet-consultation"],
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5",
    crossLinks: {
      sectionTitle: "When the Numbers Point Beyond the Lab",
      sectionIntro: "Blood panels and urinalysis give us objective evidence — but evidence is only useful if you know what to do with it. At Paws & Claws, every abnormal result triggers a structured clinical response rather than a wait-and-see approach. Here's how the data we generate in our lab shapes what happens next for your pet.",
      items: [
        {
          heading: "Elevated white cells, atypical lymphocytes, or unexplained inflammatory markers",
          body: [
            { text: "When a CBC returns with white cell counts that don't fit the picture we'd expect from a straightforward bacterial infection — unusually high counts, blasts, or atypical lymphocyte morphology — we don't guess. These patterns demand specific answers, and the fastest way to get them is through " },
            { link: { label: "DNA-level pathogen testing", slug: "prc-testing" } },
            { text: ". This is especially critical before any planned procedure: a pet going into surgery with an undetected tick-borne infection or subclinical viral illness carries significantly elevated anaesthetic risk, and " },
            { link: { label: "pre-operative infection clearance", slug: "surgical-services" } },
            { text: " is a non-negotiable part of our pre-operative protocol." },
          ],
        },
        {
          heading: "X-ray or ultrasound findings that need a tissue answer",
          body: [
            { text: "Imaging tells us where something is and what it looks like — but it rarely tells us what it is at a cellular level. When our in-house radiographs or ultrasound reveal a suspicious lesion, a distended organ, or unexpected free fluid in a body cavity, we move immediately to " },
            { link: { label: "guided tissue sampling", slug: "advanced-imaging" } },
            { text: " without any surgical incision. If cytology confirms a lesion that needs to come out, our " },
            { link: { label: "surgical team", slug: "surgical-services" } },
            { text: " — with the reassurance that we already know what we're dealing with, which dramatically improves the precision of the surgical approach and reduces the chance of incomplete removal." },
          ],
        },
        {
          heading: "Pre-anaesthetic screening that reveals a condition requiring protocol adjustment",
          body: [
            { text: "Every pet scheduled for anaesthesia — whether for a " },
            { link: { label: "tooth extraction or oral biopsy", slug: "dental-care" } },
            { text: " or a more involved procedure — has their bloodwork reviewed by our anaesthetic team before any agent is selected. If we find mildly elevated creatinine suggesting early kidney disease, or reduced albumin that would affect how the anaesthetic is processed, those findings change the fluid protocol, the choice of agent, and the monitoring intensity during the procedure. The result is a safer anaesthetic event and a faster, smoother recovery — because we entered the room already knowing your pet's vulnerabilities." },
          ],
        },
      ],
    },
  },
  {
    slug: "prc-testing",
    title: "Pet PCR Testing",
    tagline: "Precise molecular testing for accurate diagnosis",
    description: "Advanced PCR molecular testing to detect infectious diseases, viruses, and bacteria with the highest accuracy.",
    longDescription: "PCR (Polymerase Chain Reaction) testing is the gold standard for detecting infectious diseases in pets. Our advanced PCR lab can identify pathogens at the molecular level, providing highly accurate diagnoses for a wide range of conditions including respiratory infections, tick-borne diseases, and more.",
    image: "/pcr-testing.png",
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
    crossLinks: {
      sectionTitle: "How a PCR Result Changes the Entire Treatment Direction",
      sectionIntro: "Most pet owners associate a positive PCR result with the start of treatment — but in practice, what the result reveals shapes every subsequent clinical decision, from which ward the animal sleeps in that night to how their care plan is assembled at discharge. The pathogen we identify is the pivot point around which the rest of the treatment rotates.",
      items: [
        {
          heading: "A confirmed parvovirus or distemper result in a young or unvaccinated dog",
          body: [
            { text: "These diagnoses carry urgency that changes the moment the result appears on screen. A parvovirus-positive puppy needs immediate barrier isolation, aggressive IV fluid therapy, nausea control, and nutritional support — all of which are delivered through our " },
            { link: { label: "critical care unit", slug: "intensive-care" } },
            { text: ". Daily " },
            { link: { label: "white cell monitoring", slug: "in-house-diagnostics" } },
            { text: " run alongside clinical observations, and treatment protocols are adjusted every 12 hours based on what the numbers are telling us. The outcome difference between a pet that reaches ICU care within hours of symptom onset versus one that waits several days is substantial — which is why rapid PCR confirmation matters as much as the treatment itself." },
          ],
        },
        {
          heading: "Tick-borne disease confirmed in a pet with vague, worsening signs",
          body: [
            { text: "Ehrlichia, Anaplasma, and Leptospira are notorious for presenting with symptoms — lethargy, poor appetite, subtle joint stiffness — that could equally suggest a dozen other conditions. A positive PCR removes all ambiguity and immediately directs targeted treatment. But the concern with these infections extends beyond eliminating the organism: they cause silent organ damage over weeks and months, and we always follow a positive tick-borne result with " },
            { link: { label: "kidney and liver imaging", slug: "advanced-imaging" } },
            { text: ". Once treatment is underway, a follow-up " },
            { link: { label: "treatment response review", slug: "pet-consultation" } },
            { text: " — because stopping too early in these cases almost always leads to relapse." },
          ],
        },
        {
          heading: "A respiratory pathogen panel that comes back positive but the pet isn't improving",
          body: [
            { text: "When a pet tests positive for Bordetella or a respiratory virus but fails to show the expected improvement on standard treatment, we look beyond the infection for a structural explanation. A collapsing trachea, bronchial hypoplasia, or nasopharyngeal polyp can perpetuate respiratory symptoms long after the infectious component has resolved, and " },
            { link: { label: "chest and airway imaging", slug: "advanced-imaging" } },
            { text: " of what's happening inside the chest and upper airways. Where a structural abnormality is confirmed, our " },
            { link: { label: "surgical team", slug: "surgical-services" } },
            { text: " evaluates whether corrective intervention is appropriate and plans the procedure with full awareness of the pet's current respiratory status — adjusting the anaesthetic approach to minimise airway risk throughout." },
          ],
        },
      ],
    },
  },
  {
    slug: "advanced-imaging",
    title: "Pet Advanced Imaging",
    tagline: "See what's happening inside with clarity",
    description: "Digital X-rays, ultrasound, and advanced imaging to give our vets a clear picture of your pet's internal health.",
    longDescription: "Our advanced imaging suite includes digital radiography and high-resolution ultrasound equipment. These non-invasive tools allow our veterinarians to examine bones, organs, and soft tissues in detail, enabling accurate diagnosis of fractures, tumors, organ disease, and more — without surgery.",
    image: "/advanced-imaging.png",
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
    relatedSlugs: ["in-house-diagnostics", "surgical-services", "prc-testing"],
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75",
    crossLinks: {
      sectionTitle: "What We See on Screen and Where It Takes Us",
      sectionIntro: "Imaging is where a clinical suspicion becomes a confirmed finding — but the image itself is only the beginning. What we see in real time on the ultrasound monitor or review on the digital radiograph determines the next step with a precision that no physical examination alone can match. Every finding has a pathway, and understanding that pathway helps owners appreciate why imaging so often leads to additional care.",
      items: [
        {
          heading: "A splenic mass, liver nodule, or intestinal wall thickening on abdominal scan",
          body: [
            { text: "These findings appear more often than owners expect, and their significance ranges enormously — from benign nodular hyperplasia to aggressive hemangiosarcoma — which is why we never describe a mass on ultrasound as 'probably fine.' Where the lesion is accessible and the pet stable, we perform ultrasound-guided fine needle aspiration on the same visit to obtain a cytological sample. If the result indicates a surgically treatable lesion, we refer directly to our team for " },
            { link: { label: "mass removal surgery", slug: "surgical-services" } },
            { text: ", which always includes " },
            { link: { label: "pre-operative organ screening", slug: "in-house-diagnostics" } },
            { text: ". Acting on a finding before it causes collapse or internal haemorrhage changes the outcome dramatically." },
          ],
        },
        {
          heading: "Reduced cardiac output, valve regurgitation, or chamber enlargement on echo",
          body: [
            { text: "Echocardiography findings don't just affect the heart — they reshape every other care decision we make for that animal. A pet with documented mitral valve disease or dilated cardiomyopathy requires a fundamentally different anaesthetic approach for any subsequent procedure, and " },
            { link: { label: "gum disease", slug: "dental-care" } },
            { text: " directly accelerates heart valve damage — untreated periodontal bacteria seed the bloodstream repeatedly over time. We also schedule these patients for " },
            { link: { label: "more frequent check-ups", slug: "pet-consultation" } },
            { text: " — because heart disease in dogs and cats is a moving target that requires active management, not a single diagnosis and discharge." },
          ],
        },
        {
          heading: "Fracture, cruciate rupture, or intervertebral disc compression on skeletal imaging",
          body: [
            { text: "Musculoskeletal imaging findings almost always end in a conversation with our surgical team — whether for TPLO, fracture fixation, or spinal decompression. What makes the difference in recovery is what happens in the weeks following the procedure. Pets recovering from orthopaedic surgery benefit significantly from " },
            { link: { label: "joint inflammation relief", slug: "laser-therapy" } },
            { text: ". This is especially important for senior patients who are already managing " },
            { link: { label: "kidney or liver compromise", slug: "in-house-diagnostics" } },
            { text: ", where prolonged pain relief protocols carry real organ risk and laser therapy offers a meaningful alternative for long-term comfort management." },
          ],
        },
      ],
    },
  },
  {
    slug: "intensive-care",
    title: "Pet Intensive Care (ICU)",
    tagline: "Round-the-clock critical care when it matters most",
    description: "24/7 intensive care unit for critically ill pets requiring continuous monitoring and advanced life support.",
    longDescription: "Our dedicated ICU provides round-the-clock care for pets in critical condition. Equipped with advanced monitoring systems, oxygen support, IV fluid therapy, and staffed by experienced critical care specialists, our ICU gives your pet the best possible chance of recovery.",
    image: "/intensive-care.png",
    color: "#e05c7a",
    features: [
      { title: "24/7 Continuous Monitoring", description: "Dedicated nursing staff monitor vital signs — heart rate, blood pressure, oxygen saturation, temperature, and respiratory rate — around the clock without interruption." },
      { title: "Oxygen Therapy & Ventilation", description: "Oxygen cages, nasal cannulas, and mechanical ventilation support for patients with respiratory compromise, ensuring adequate oxygenation at all times." },
      { title: "IV Fluid & Electrolyte Management", description: "Precise IV fluid therapy with constant-rate infusions of fluids, electrolytes, dextrose, and targeted agents using syringe drivers and fluid pumps." },
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
    crossLinks: {
      sectionTitle: "How the ICU Connects to the Rest of the Clinic",
      sectionIntro: "The ICU at Paws & Claws is not a ward where animals are placed and monitored in isolation — it is a dynamic hub where every other department in the clinic feeds into and out of, depending on where a patient is in their recovery. Understanding how the ICU interfaces with diagnostics, imaging, surgery, and rehabilitation helps explain why our critical outcomes are consistently strong.",
      items: [
        {
          heading: "Pets transferred from surgery who need continuous post-operative surveillance",
          body: [
            { text: "Following any complex abdominal, thoracic, or orthopaedic procedure, patients move directly from the operating table to the ICU rather than to a standard recovery kennel. The transition is immediate and the handover detailed — our nursing team receives a full intra-operative report covering fluid volumes administered, any haemodynamic instability encountered, and the exact pain control protocol in place. " },
            { link: { label: "post-operative blood panels", slug: "in-house-diagnostics" } },
            { text: " flag early signs of infection, anaemia, or organ stress before they become visible clinically, and " },
            { link: { label: "emergency imaging", slug: "advanced-imaging" } },
            { text: " is immediately available if internal haemorrhage or fluid accumulation is suspected — so the ICU team never has to wait for an answer when a patient deteriorates unexpectedly overnight." },
          ],
        },
        {
          heading: "A collapsed, severely anaemic, or respiratory-distressed patient arriving as an emergency",
          body: [
            { text: "Emergency admissions to the ICU are often the most diagnostically uncertain — the pet is too unstable for a lengthy examination, and the priority is stabilisation before investigation. Once the patient is breathing adequately and cardiovascularly supported, rapid " },
            { link: { label: "point-of-care blood work", slug: "in-house-diagnostics" } },
            { text: " identifies anaemia, electrolyte crises, or organ failure within minutes, while bedside " },
            { link: { label: "abdominal ultrasound", slug: "advanced-imaging" } },
            { text: " determines whether free fluid, a splenic rupture, or pleural effusion is driving the deterioration. If a surgically correctable cause is confirmed, the ICU team transfers the stabilised patient directly to the operating room, and " },
            { link: { label: "emergency surgery", slug: "surgical-services" } },
            { text: " proceeds without any external referral or transport delay." },
          ],
        },
        {
          heading: "Stabilised patients beginning the transition out of intensive care",
          body: [
            { text: "The final phase of ICU care is often the most visible to owners — the moment their pet begins eating, sitting up unassisted, and showing personality again. At this point, the focus shifts from stabilisation to active recovery, and we typically introduce " },
            { link: { label: "post-surgical inflammation relief", slug: "laser-therapy" } },
            { text: " without increasing the systemic treatment load in a patient whose kidneys and liver may still be recovering. Before discharge, every ICU patient receives a " },
            { link: { label: "full discharge review", slug: "pet-consultation" } },
            { text: " — because what happens in the first two weeks at home is just as important as the days spent in hospital." },
          ],
        },
      ],
    },
  },
  {
    slug: "dental-care",
    title: "Pet Dental Care",
    tagline: "Healthy teeth, happy pets",
    description: "Complete oral health services including professional cleanings, extractions, and preventive dental care.",
    longDescription: "Dental disease is one of the most common health issues in pets, yet it's largely preventable. Our comprehensive dental care services include professional cleanings under anesthesia, dental X-rays, tooth extractions when needed, and personalized home care plans to keep your pet's smile healthy.",
    image: "/dental-care.png",
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
    crossLinks: {
      sectionTitle: "What Comes Before and After Every Dental Procedure",
      sectionIntro: "A dental cleaning under anaesthesia is never a standalone event. It requires careful preparation to be safe, and it frequently reveals findings — oral masses, radiographic bone loss, unexpected gum pathology — that change what we do next. Understanding the full clinical picture around a dental visit helps explain why it's one of the most medically significant routine procedures we perform.",
      items: [
        {
          heading: "Pre-anaesthetic screening that determines whether the procedure is safe to proceed",
          body: [
            { text: "Every pet scheduled for a dental cleaning, extraction, or oral biopsy first has " },
            { link: { label: "kidney, liver, and clotting checks", slug: "in-house-diagnostics" } },
            { text: ". This isn't a formality — it's the reason we can confidently say the anaesthetic we administer is appropriate for that specific animal on that specific day. Mildly elevated creatinine means we adjust fluid rates and choice of agent. Reduced platelet counts mean we approach extraction sites with extra haemostatic care. For pets with a known or suspected heart condition, we also review " },
            { link: { label: "heart structure and rhythm", slug: "advanced-imaging" } },
            { text: " — because unrecognised arrhythmias and reduced cardiac output significantly alter how we manage the anaesthetic from induction to recovery." },
          ],
        },
        {
          heading: "An oral mass or tissue abnormality discovered during examination under anaesthesia",
          body: [
            { text: "The oral cavity reveals things under anaesthesia that are simply invisible during an awake examination. A growth tucked behind the last molar, a region of ulcerated mucosa on the palate, or a tooth root with significant periapical bone loss on radiograph — these findings change the direction of the procedure immediately. Biopsy samples are collected and submitted to pathology, and if histopathology returns a result requiring wider surgical excision, our " },
            { link: { label: "oral surgery team", slug: "surgical-services" } },
            { text: " plans a clean-margin resection with appropriate anaesthetic support. During the healing phase that follows, " },
            { link: { label: "post-extraction pain and swelling", slug: "laser-therapy" } },
            { text: " can make eating uncomfortable in the days after an extraction or biopsy site." },
          ],
        },
        {
          heading: "Chronic dental disease that has been silently affecting heart, kidney, and liver function",
          body: [
            { text: "The connection between a dirty mouth and organ disease is well-established in veterinary research, but most owners are surprised to learn that a pet with severe periodontitis has been experiencing daily bacteraemia — bacteria entering the bloodstream each time they chew — for potentially years. For these patients, " },
            { link: { label: "organ function blood panels", slug: "in-house-diagnostics" } },
            { text: " give us a baseline to measure recovery against after the oral disease is addressed. In pets where cardiac involvement is a concern — particularly older small breeds prone to mitral valve disease — an " },
            { link: { label: "echocardiogram", slug: "advanced-imaging" } },
            { text: " performed before anaesthesia maps heart structure and valve function precisely, ensuring the dental procedure is conducted with full awareness of the cardiovascular risk profile." },
          ],
        },
      ],
    },
  },
  {
    slug: "laser-therapy",
    title: "Pet Laser Therapy",
    tagline: "Pain relief and healing through light",
    description: "Non-invasive therapeutic laser treatments to reduce pain, inflammation, and accelerate healing.",
    longDescription: "Cold laser therapy (photobiomodulation) uses specific wavelengths of light to stimulate cellular regeneration, reduce inflammation, and relieve pain. It's a safe, non-chemical option for managing arthritis, post-surgical recovery, wounds, and chronic pain conditions in pets of all ages.",
    image: "/laser-therapy.png",
    color: "#4caf82",
    features: [
      { title: "Osteoarthritis & Joint Pain Management", description: "Targeted laser application to affected joints reduces synovial inflammation, stimulates cartilage repair, and significantly improves mobility in arthritic pets." },
      { title: "Post-Surgical Wound Healing", description: "Accelerates incision healing by stimulating collagen synthesis, reducing post-op swelling, and decreasing the need for heavy pain control after surgery." },
      { title: "Acute Wound & Trauma Treatment", description: "Promotes rapid closure of lacerations, bite wounds, hot spots, and skin infections by boosting local circulation and cellular repair mechanisms." },
      { title: "Intervertebral Disc Disease (IVDD)", description: "Laser therapy along the spine reduces disc-related nerve inflammation and neuropathic pain, used as an adjunct to medical or surgical IVDD management." },
      { title: "Ear & Dermatological Conditions", description: "Treats chronic otitis externa, lick granulomas, and other inflammatory skin conditions by reducing pruritus, bacterial load, and tissue inflammation." },
      { title: "Rehabilitation & Recovery Support", description: "Integrated into our rehab protocols to support muscle recovery, reduce disuse atrophy, and improve outcomes following orthopedic surgeries or neurological events." },
    ],
    benefits: [
      { title: "Chemical-Free Relief", description: "Effective pain management without relying on systemic treatments." },
      { title: "Non-Invasive", description: "Completely painless procedure that most pets find relaxing." },
      { title: "Fast Results", description: "Many pets show improvement after just a few sessions." },
    ],
    faqs: [
      { question: "Is laser therapy painful for my pet?", answer: "Not at all — most pets find it relaxing and comfortable. Many fall asleep during treatment sessions." },
      { question: "How many sessions are needed?", answer: "Acute conditions may need 3–6 sessions; chronic conditions benefit from ongoing maintenance therapy." },
    ],
    relatedSlugs: ["surgical-services", "pet-consultation", "intensive-care"],
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    crossLinks: {
      sectionTitle: "Where Laser Therapy Fits in a Broader Care Plan",
      sectionIntro: "Laser therapy is rarely a first-line treatment — it works best as a precision tool applied within a care plan that already has a confirmed diagnosis and a clear clinical goal. The conditions that respond most dramatically to photobiomodulation are almost always those that have been properly investigated beforehand, and the sessions themselves reinforce what other treatments are trying to achieve.",
      items: [
        {
          heading: "Joint stiffness and reduced mobility in a pet with confirmed arthritis on imaging",
          body: [
            { text: "The arthritic pets that benefit most from laser therapy are those whose condition has been objectively documented rather than assumed. " },
            { link: { label: "joint space narrowing and bone changes on X-ray", slug: "advanced-imaging" } },
            { text: " give us a baseline severity score that helps us calibrate treatment intensity and track objective improvement over time. For senior patients managing concurrent organ disease — chronic kidney disease and arthritis frequently coexist in older cats in particular — laser therapy's non-chemical mechanism is especially valuable, because it allows us to reduce or eliminate the " },
            { link: { label: "systemic treatment load that strains the kidneys", slug: "in-house-diagnostics" } },
            { text: " to use safely long-term." },
          ],
        },
        {
          heading: "Slow-healing surgical wounds or post-operative pain that isn't resolving as expected",
          body: [
            { text: "When a pet recovering from a " },
            { link: { label: "surgical procedure", slug: "surgical-services" } },
            { text: " shows a wound that is healing more slowly than expected, or continues to guard the site and vocalise with movement beyond the normal post-operative window, laser therapy is introduced to the recovery protocol. The photobiomodulation effect at the cellular level — increased ATP production, accelerated collagen synthesis, reduced inflammatory cytokine activity — is measurable within sessions and provides a clinically meaningful reduction in discomfort. These sessions are scheduled alongside " },
            { link: { label: "healing progress reviews", slug: "pet-consultation" } },
            { text: " where the ongoing need for systemic pain control is re-evaluated at each visit." },
          ],
        },
        {
          heading: "Recurrent skin lesions or ear inflammation that hasn't fully responded to prior treatment",
          body: [
            { text: "Chronic skin and ear conditions that keep returning despite repeated treatment courses almost always have either a resistant organism, a structural problem, or an underlying allergy perpetuating the cycle. Before committing to another round of the same approach, we recommend " },
            { link: { label: "pathogen identification testing", slug: "prc-testing" } },
            { text: " to determine exactly what is driving the recurrence. Laser therapy is then applied to reduce the inflammatory tissue environment that makes these sites so prone to re-infection — calming the pruritus, improving local circulation, and reducing bacterial burden in the lesion. Any ongoing care that continues to play a role is coordinated through our " },
            { link: { label: "in-house care team", slug: "in-house-diagnostics" } },
            { text: " so treatment is continuous between laser sessions." },
          ],
        },
      ],
    },
  },
  {
    slug: "vaccination-programs",
    title: "Pet Vaccination Programs",
    tagline: "Protection for every stage of life",
    description: "Comprehensive immunization programs tailored to your pet's lifestyle, age, and specific health needs.",
    longDescription: "Our vaccination programs are carefully designed around your pet's individual needs. We consider your pet's age, lifestyle, risk factors, and previous vaccination history to create an optimal schedule that provides maximum protection while avoiding unnecessary vaccines.",
    image: "/vaccination-programs.png",
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
    relatedSlugs: ["pet-consultation", "in-house-diagnostics", "intensive-care"],
    icon: "m18 2 4 4-14 14H4v-4Z M14.5 5.5l4 4 M3 22l3-3",
    crossLinks: {
      sectionTitle: "Making the Most of Every Vaccination Visit",
      sectionIntro: "A vaccination appointment is one of the most efficient opportunities in your pet's preventive care calendar — a moment when your pet is already in the clinic, already being handled, and already in the hands of a veterinary team that can spot more than just an overdue booster. Done properly, a single vaccination visit can accomplish several months' worth of preventive care in one session.",
      items: [
        {
          heading: "Annual boosters paired with health screening that catches what owners can't see",
          body: [
            { text: "We strongly encourage pairing vaccine boosters with a " },
            { link: { label: "nose-to-tail physical exam", slug: "pet-consultation" } },
            { text: ". The rationale is straightforward: vaccines protect against specific pathogens, but they do nothing for the gradual kidney decline, the developing thyroid nodule, or the early cardiac murmur that is quietly present in the background. Combining the visit with " },
            { link: { label: "early organ disease screening", slug: "in-house-diagnostics" } },
            { text: " allows us to track trends rather than react to crises — which is how we catch conditions like early renal insufficiency and hyperthyroidism at a stage where management actually makes a meaningful difference to long-term quality of life." },
          ],
        },
        {
          heading: "An unvaccinated or under-vaccinated pet presenting with serious symptoms",
          body: [
            { text: "When a puppy or kitten arrives showing rapid deterioration, bloody diarrhoea, severe lethargy, or respiratory distress, parvovirus, distemper, and feline panleukopenia move immediately to the top of the differential list — and the absence of vaccination records transforms a clinical suspicion into a near-certainty. We run immediate " },
            { link: { label: "rapid antigen and blood tests", slug: "in-house-diagnostics" } },
            { text: " to confirm the diagnosis within the hour, and if the result is positive, the pet is transferred directly to " },
            { link: { label: "barrier nursing with IV fluid support", slug: "intensive-care" } },
            { text: " while we contact the owner and review whether other pets in the household have adequate immunity." },
          ],
        },
        {
          heading: "Pets due for boarding or grooming whose vaccination records are incomplete",
          body: [
            { text: "All pets checked into our " },
            { link: { label: "boarding facility", slug: "pet-boarding" } },
            { text: " or attending a " },
            { link: { label: "grooming appointment", slug: "pet-grooming" } },
            { text: " are required to have current core vaccinations on file — not as a bureaucratic requirement, but because the shared environment creates genuine transmission risk for unprotected animals. If your pet's records show overdue vaccines, our team can administer the required boosters in a same-day appointment scheduled around their boarding check-in or grooming slot, so no separate trip is ever needed. We also issue updated digital vaccination certificates immediately, which can be shared with any third-party kennel, daycare, or travel authority that requires them." },
          ],
        },
      ],
    },
  },
  {
    slug: "surgical-services",
    title: "Pet Surgical Services",
    tagline: "Expert surgery with compassionate care",
    description: "Safe, professional surgical procedures performed by board-certified veterinary surgeons in a fully equipped OR.",
    longDescription: "Our surgical suite is equipped with the latest technology to ensure the safest possible outcomes for your pet. From routine spay/neuter procedures to complex soft tissue and orthopedic surgeries, our board-certified surgeons bring expertise and precision to every procedure.",
    image: "/surgical-services.png",
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
    crossLinks: {
      sectionTitle: "The Full Care Pathway Around Every Surgical Procedure",
      sectionIntro: "Surgery at Paws & Claws is never a single event — it is the central moment in a carefully managed clinical pathway that begins days before your pet enters the operating room and continues for weeks after they leave it. Every step in that pathway exists because outcomes are better when preparation is thorough and recovery is actively supported rather than left to chance.",
      items: [
        {
          heading: "Pre-operative preparation that makes the anaesthetic as safe as possible",
          body: [
            { text: "Before any procedure — elective or emergency — we run a full " },
            { link: { label: "kidney, liver, glucose, and clotting screen", slug: "in-house-diagnostics" } },
            { text: ". For patients with a known or suspected cardiac history, or for any breed with a predisposition to arrhythmia, we also perform " },
            { link: { label: "heart and chest imaging", slug: "advanced-imaging" } },
            { text: ". These steps aren't standard protocol in every clinic — but they are at ours, because the difference between an unanticipated intraoperative event and a smooth procedure is almost always information we either had or didn't have before we started." },
          ],
        },
        {
          heading: "Post-operative pain that needs managing without putting additional strain on recovering organs",
          body: [
            { text: "The 48 to 72 hours following surgery are when pain management is most demanding — and also when the kidneys and liver are most vulnerable to cumulative strain from anaesthetic agents and post-operative care protocols. We introduce " },
            { link: { label: "incisional inflammation relief", slug: "laser-therapy" } },
            { text: " from day two of recovery in a way that genuinely reduces the level of systemic intervention required to keep the patient comfortable. For patients who have moved from the operating room to the " },
            { link: { label: "ICU for overnight monitoring", slug: "intensive-care" } },
            { text: ", laser sessions are incorporated into the daily ICU care routine — so recovery begins actively, not passively." },
          ],
        },
        {
          heading: "Discharge care packs and the follow-up structure that prevents complications at home",
          body: [
            { text: "Every pet leaving after a procedure is discharged with a complete care pack — infection control, inflammation support, and pain relief — prepared and explained by our team before collection. The pack is assembled based on the specific procedure performed and the individual patient's organ function results, so there is no generic approach. A " },
            { link: { label: "wound check and suture review", slug: "pet-consultation" } },
            { text: " at three and ten days post-surgery checks healing, assesses pain levels, and determines whether additional imaging or physiotherapy is needed — because the animals that develop complications after surgery almost always do so in the first two weeks." },
          ],
        },
      ],
    },
  },
  {
    slug: "pet-grooming",
    title: "Pet Grooming",
    tagline: "Look good, feel great — every visit",
    description: "Professional grooming services tailored to every breed, coat type, and temperament for a stress-free experience.",
    longDescription: "Our expert groomers provide full grooming services in a calm, clean environment designed to keep your pet comfortable and looking their best. Whether it's a simple bath and brush or a full breed-specific styling, every session is handled with patience and care. We use premium, pet-safe products suitable for sensitive skin and all coat types.",
    image: "/pet-grooming.png",
    color: "#e05c7a",
    features: [
      { title: "Bath & Blow Dry", description: "Full shampoo and conditioning treatment using breed-appropriate, hypoallergenic products, followed by professional blow drying and brushing to a smooth, tangle-free finish." },
      { title: "Breed-Specific Styling & Haircut", description: "Precision trimming and styling following breed-standard cuts or owner-requested styles, performed by groomers trained in both dog and cat coat types." },
      { title: "Nail Trimming & Filing", description: "Safe trimming of overgrown nails using sharp, proper-sized clippers, followed by filing to smooth sharp edges — preventing splitting, snagging, and joint stress." },
      { title: "Ear Cleaning", description: "Gentle removal of wax and debris from the outer ear canal using veterinarian-approved ear cleaner, reducing the risk of infection and detecting early signs of otitis." },
      { title: "Teeth Brushing", description: "Manual brushing with pet-safe enzymatic toothpaste to reduce plaque, freshen breath, and support ongoing oral health between professional dental cleanings." },
      { title: "De-shedding Treatment", description: "Specialized shampoo, conditioning, and high-velocity drying combined with thorough brushing to significantly reduce shedding and remove loose undercoat in heavy-shedding breeds." },
    ],
    benefits: [
      { title: "Stress-Free Environment", description: "Calm, one-on-one grooming sessions designed to keep anxious pets at ease." },
      { title: "Trained Professionals", description: "Experienced groomers familiar with all breeds, coat types, and temperaments." },
      { title: "Health Benefits", description: "Regular grooming helps detect skin issues, lumps, and parasites early." },
    ],
    faqs: [
      { question: "How often should my pet be groomed?", answer: "Most dogs benefit from grooming every 4–8 weeks. Long-coated breeds may need more frequent visits, while short-coated dogs can go longer between sessions." },
      { question: "Do you groom cats too?", answer: "Yes — we groom cats and are experienced in handling feline clients who may need extra patience and a gentle approach." },
    ],
    relatedSlugs: ["pet-consultation", "dental-care", "vaccination-programs"],
    icon: "M7 3a1 1 0 000 2h10a1 1 0 100-2H7zM4 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z",
    crossLinks: {
      sectionTitle: "What Our Groomers Often Find — and What Happens Next",
      sectionIntro: "Grooming gives our team an unusually complete access to your pet's body surface — every fold of skin, every ear canal, every tooth surface that owners rarely inspect at home. Because our groomers work inside a fully staffed veterinary clinic, findings that would go unaddressed for weeks at a standalone grooming salon can be assessed by a vet on the same visit, the same afternoon.",
      items: [
        {
          heading: "A lump under the coat that the owner never knew existed",
          body: [
            { text: "Dense coats hide a remarkable amount — tick infestations embedded at the skin surface, early lipomas on the flank, swollen lymph nodes under the jaw, or skin lesions on the underside of the abdomen. When our groomers encounter something that warrants clinical attention, they walk the pet directly to the veterinary team for a " },
            { link: { label: "same-visit lump assessment", slug: "pet-consultation" } },
            { text: ". If the finding is a mass of uncertain character, " },
            { link: { label: "ultrasound imaging", slug: "advanced-imaging" } },
            { text: " determines whether it is superficial or involves deeper structures — information that tells us whether a simple excision under sedation is sufficient, or whether a more detailed surgical plan with pre-operative staging is needed." },
          ],
        },
        {
          heading: "Ear discharge, odour, or head-shaking that suggests something more than mild wax build-up",
          body: [
            { text: "The ear canal is one of the most consistently under-examined structures in pets because owners rarely look inside it — and groomers often detect the early signs of otitis before any clinical symptom has prompted a vet visit. Dark brown discharge, a yeasty or fetid odour, or visible redness at the canal entrance prompts an immediate referral to our veterinary team. For cases that are recurrent, bilateral, or haven't responded to previous treatment, " },
            { link: { label: "organism-specific ear infection testing", slug: "prc-testing" } },
            { text: " ensures treatment is targeted rather than empirical — and any ear care products required are prepared by our " },
            { link: { label: "on-site care team", slug: "in-house-diagnostics" } },
            { text: " before the owner leaves so the treatment cycle begins immediately." },
          ],
        },
        {
          heading: "Significant tartar, inflamed gums, or tooth root exposure noticed during brushing",
          body: [
            { text: "Teeth brushing during a groom provides a close-up view of the oral cavity that most owners never replicate at home, and what groomers frequently observe — thick calculus extending below the gum margin, gingival recession exposing root surfaces, or a broken molar — is clinical-grade dental disease that needs professional intervention. These pets are referred to our " },
            { link: { label: "dental team for teeth pain and gum disease", slug: "dental-care" } },
            { text: ". The anaesthetic for that procedure is always preceded by " },
            { link: { label: "kidney and liver pre-screening", slug: "in-house-diagnostics" } },
            { text: " — and if vaccine boosters are also due, we schedule them in the same appointment to avoid bringing the pet back twice." },
          ],
        },
      ],
    },
  },
  {
    slug: "pet-boarding",
    title: "Pet Boarding",
    tagline: "A safe, loving home away from home",
    description: "Safe, comfortable, and supervised boarding care for your pet while you're away — with veterinary oversight on site.",
    longDescription: "Our boarding facility is designed with your pet's comfort and safety as the top priority. Unlike standard kennels, our boarding is housed within our veterinary clinic — meaning a qualified vet is always on site. Each guest enjoys a clean, climate-controlled space, regular exercise, social interaction, and the same love and attention they'd receive at home.",
    image: "/pet-boarding.png",
    color: "#7c6fcd",
    features: [
      { title: "Climate-Controlled Comfortable Suites", description: "Spacious, climate-controlled individual suites with cozy bedding, ensuring your pet sleeps comfortably and stays calm in a clean, odor-managed environment." },
      { title: "24/7 Veterinary Oversight", description: "Unlike standard boarding facilities, a licensed veterinarian is always on site — meaning any health concern is addressed immediately without delays or emergency transfers." },
      { title: "Daily Exercise & Playtime", description: "Scheduled play sessions and walks tailored to your pet's energy level and temperament, keeping them active, mentally stimulated, and happy throughout their stay." },
      { title: "Feeding to Your Schedule", description: "We follow your pet's exact feeding routine, diet, and portion sizes — bringing their own food or providing vet-recommended options, with feeding logs maintained daily." },
      { title: "Treatment Administration", description: "Our trained nursing staff administer all prescribed care treatments on schedule — oral, injectable, topical, or eye drops — with detailed records updated at each administration." },
      { title: "Daily Updates & Photos", description: "We send daily check-in messages with photos so you can see your pet is happy and well — giving you peace of mind no matter how far away you are." },
    ],
    benefits: [
      { title: "Vet On-Site Always", description: "Immediate medical attention available 24/7 — no other boarding facility offers this." },
      { title: "Personalised Care", description: "Your pet's routine, diet, and care treatments are followed exactly as at home." },
      { title: "Peace of Mind", description: "Daily photo updates so you always know your pet is safe and happy." },
    ],
    faqs: [
      { question: "What do I need to bring for boarding?", answer: "Bring your pet's food, any care products they need, a familiar blanket or toy, and vaccination records. We'll take care of everything else." },
      { question: "Is my pet required to be vaccinated to board?", answer: "Yes — for the safety of all boarding guests, pets must be up to date on core vaccines. We can administer any missing vaccines at check-in." },
    ],
    relatedSlugs: ["pet-grooming", "pet-consultation", "vaccination-programs"],
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    crossLinks: {
      sectionTitle: "Why Boarding Inside a Veterinary Clinic Is Fundamentally Different",
      sectionIntro: "The difference between boarding at Paws & Claws and boarding at a conventional kennel is not one of comfort or staff ratio — it is one of capability. Every boarding guest here lives inside a functioning veterinary hospital, which means the response to any health concern is measured in minutes rather than hours, and the resources available are clinical rather than limited to a phone call to an external vet.",
      items: [
        {
          heading: "A boarding guest who stops eating, becomes lethargic, or shows signs of illness mid-stay",
          body: [
            { text: "Changes in a boarded pet's behaviour — refusing food, sleeping far more than normal, producing abnormal stools, or showing signs of respiratory distress — are assessed by our on-site vet within the hour. There is no 'we'll monitor it until tomorrow' policy here, because the full diagnostic toolkit is immediately available. " },
            { link: { label: "same-day blood and urine panels", slug: "in-house-diagnostics" } },
            { text: " give us organ function data within the hour, and if the picture points toward something more serious, " },
            { link: { label: "abdominal or chest imaging", slug: "advanced-imaging" } },
            { text: " is available immediately. If a pet deteriorates rapidly, they are transferred directly to our " },
            { link: { label: "ICU for continuous monitoring and IV support", slug: "intensive-care" } },
            { text: "." },
          ],
        },
        {
          heading: "Senior or chronically ill pets boarding on complex daily care regimens",
          body: [
            { text: "We regularly board pets with conditions that require careful, timed administration of multiple treatments — diabetics needing twice-daily insulin support, epileptic dogs on seizure control, cats with hyperthyroidism on thyroid management, or cardiac patients on fluid balance support. Our nursing staff administer every treatment on schedule and record each administration with timestamps. If a care product runs out mid-stay, our " },
            { link: { label: "on-site care team", slug: "in-house-diagnostics" } },
            { text: " arranges a replacement with owner authorisation without any external visit. And if a pet's condition appears to change, a " },
            { link: { label: "same-day vet assessment", slug: "pet-consultation" } },
            { text: " reassesses the care plan on the spot." },
          ],
        },
        {
          heading: "Owners who want to combine a boarding stay with a health check or grooming appointment",
          body: [
            { text: "Many owners use their pet's boarding stay as an opportunity to check off preventive care that otherwise gets deferred. A " },
            { link: { label: "grooming session", slug: "pet-grooming" } },
            { text: " can be scheduled during the boarding stay so your pet comes home clean and freshly styled without any separate trip. For pets whose annual vaccination boosters or wellness blood panels are due, we coordinate these within the boarding period — so by the time your pet is collected, their vaccines are current, their organ function has been checked, and if anything was flagged, you'll receive a clear summary of findings and recommended next steps before you even reach the reception desk." },
          ],
        },
      ],
    },
  },
  {
    slug: "in-house-diagnostics",
    title: "Pet Care Supplies",
    tagline: "Everything your pet needs, ready when you are",
    description: "Convenient on-site dispensing of veterinary-approved treatments, therapeutic diets, and preventive care products — all available same-day.",
    longDescription: "Our fully stocked care supplies suite means you can collect everything your pet needs the same day it is recommended — no separate trips, no delays. We carry a wide range of veterinary-approved treatments, preventive care products, therapeutic diets, and wellness supports, all at competitive prices and explained clearly before you leave.",
    image: "/in-house-pharmacy.png",
    color: "#4caf82",
    features: [
      { title: "Same-Day Treatment Collection", description: "All care products recommended during your visit are ready for collection before you leave — no waiting for external processing or delivery." },
      { title: "Flea, Tick & Heartworm Prevention", description: "Full range of preventive treatments including spot-ons, oral preventives, and collars from leading brands, with expert guidance on the right choice for your pet." },
      { title: "Therapeutic Diets", description: "Veterinary-recommended diets for kidney disease, urinary conditions, obesity, allergies, GI disorders, and joint health — stocked for immediate collection." },
      { title: "Wellness Supplements", description: "Evidence-based joint support (glucosamine, omega-3s), digestive health aids, skin and coat products, and calming supplements recommended by our veterinary team." },
      { title: "Custom-Formulated Treatments", description: "Specially prepared formulations in flavoured chews, liquids, or transdermal gels for pets that need alternative delivery formats or non-standard strengths." },
      { title: "Care Guidance & Counselling", description: "Our team explains how to administer every product, what to watch for, and how each item fits into your pet's overall care plan before you leave the clinic." },
    ],
    benefits: [
      { title: "No Extra Trips", description: "Collect everything your pet needs immediately after their appointment." },
      { title: "Expert Guidance", description: "Clear, plain-language explanation of every product and how to use it." },
      { title: "Competitive Pricing", description: "Fair prices on all treatments and preventive care products." },
    ],
    faqs: [
      { question: "Can I collect repeat treatments without an appointment?", answer: "Yes — repeat care products can be collected without an appointment. Simply call ahead or request online and pick up at your convenience." },
      { question: "Do you offer specially prepared formulations?", answer: "Yes, we can arrange custom preparations for pets that need alternative formats, flavours, or strengths not available off the shelf." },
    ],
    relatedSlugs: ["vaccination-programs", "pet-consultation", "laser-therapy"],
    icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z",
    crossLinks: {
      sectionTitle: "How Our Care Supplies Sit at the Centre of Your Pet's Treatment Plan",
      sectionIntro: "Every clinical decision made in our consulting rooms, operating theatre, and ICU eventually results in something your pet needs to receive consistently at home. Getting this part right — the right products, clearly explained, available immediately — is just as important as getting the diagnosis right.",
      items: [
        {
          heading: "Post-surgical discharge packs built around the individual patient, not a standard template",
          body: [
            { text: "When a pet is discharged after a " },
            { link: { label: "surgical procedure", slug: "surgical-services" } },
            { text: ", the care pack they leave with is assembled specifically for them — not pulled from a generic shelf. Every product reflects the exact procedure performed, the pet's organ function results from pre-operative screening, and whether they are also receiving " },
            { link: { label: "laser therapy during recovery", slug: "laser-therapy" } },
            { text: ", which reduces the level of systemic intervention required. Every item is explained face to face before you leave, because a treatment that isn't given correctly delivers none of the benefit it was intended for." },
          ],
        },
        {
          heading: "Ongoing care for chronic conditions where consistent access prevents treatment gaps",
          body: [
            { text: "Pets managing " },
            { link: { label: "thyroid disease, diabetes, renal insufficiency, or heart failure", slug: "in-house-diagnostics" } },
            { text: " need continuity of care that a standard external supplier struggles to provide. We maintain dispensing records aligned with each patient's monitoring schedule, so when a recheck blood panel shows that an adjustment is needed, the updated care products are available immediately. For cardiac patients, any changes are always reviewed alongside the findings from their most recent echocardiogram and " },
            { link: { label: "clinical progress review", slug: "pet-consultation" } },
            { text: " — because adjusting a cardiac care plan without reviewing the full clinical picture is how patients deteriorate." },
          ],
        },
        {
          heading: "Preventive care products and parasite control as part of a complete care programme",
          body: [
            { text: "At every " },
            { link: { label: "vaccination visit", slug: "vaccination-programs" } },
            { text: ", our team reviews your pet's current parasite prevention status and updates flea, tick, and heartworm protection as part of a complete preventive care review. Vaccination alone without parasite control leaves significant gaps in a pet's protection — particularly in a region where tick-borne disease is prevalent. All preventive products, therapeutic diets, and wellness supports recommended during the consultation are available for immediate collection — so your pet's complete care programme is fully stocked before you leave the car park." },
          ],
        },
      ],
    },
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