//Testimonial Data
const testimonials = [
     {
      name: ".CENTRAL WISE.<br>Beti Bachao Beti Padhao (Save the Girl Child, Educate the Girl Child)",
      testimonial:
        "Objective: Address the declining child sex ratio and promote the education of girls.<br>Key Features: Awareness campaigns, enforcement of existing laws, and encouraging community participation.",
     },
     {
        name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        testimonial:
          "Objective: Provide partial wage compensation to pregnant women and lactating mothers to ensure proper rest and nutrition.<br>Key Features: Cash incentive of ₹5,000 in three installments for the first live birth.",
      },
      {
        name: "One Stop Centre Scheme (Sakhi)",
        testimonial:
          "Objective: Support women affected by violence, in private and public spaces, within the family, community, and at the workplace.<br>Key Features: Integrated support and assistance including medical aid, police assistance, legal aid/case management, psychosocial counseling, and temporary shelter.",
      },
      {
        name: "Mahila Shakti Kendra (MSK)",
        testimonial:
          "Objective: Empower rural women through community participation.<br>Key Features: Community engagement and training for women to avail government schemes and services.",
      },
      {
        name: "Ujjawala Scheme",
        testimonial:
          "Objective: Prevent trafficking and rescue, rehabilitate, and reintegrate victims of trafficking.<br>Key Features: Comprehensive support including safe shelter, basic amenities, education, vocational training, and legal aid.",
      },
      {
        name: "Sukanya Samriddhi Yojana (SSY)",
        testimonial:
          "Objective: Promote savings for the future education and marriage expenses of the girl child.<br>Key Features: High-interest rate savings scheme, tax benefits, and maturity benefits for girls under 10 years of age.",
      },
      {
        name: "Swadhar Greh Scheme",
        testimonial:
          "Objective: Provide relief and rehabilitation to women in difficult circumstances.<br>Key Features: Provision of shelter, food, clothing, and health as well as economic and social security.",
      },
      {
        name: "Working Women Hostel Scheme",
        testimonial:
          "Objective: Ensure safe accommodation for working women away from their homes.<br>Key Features: Provision of safe and conveniently located accommodation for working women with day care facility for their children.",
      },
      {
        name: "Support to Training and Employment Program for Women (STEP)",
        testimonial:
          "Objective: Provide skills and training for employability to women.<br>Key Features: Training in employable skills, promoting sustainable employment in traditional sectors.",
      },
      {
        name: "Maternity Benefit (Amendment) Act, 2017",
        testimonial:
          "Objective: Protect the employment of women during the time of maternity and entitles them to ‘maternity benefit’.<br>Key Features: Increased maternity leave from 12 weeks to 26 weeks for the first two children.",
      },
      {
        name: "Rashtriya Mahila Kosh (National Credit Fund for Women)",
        testimonial:
          "Objective: Extend micro-finance services to bring about the socio-economic upliftment of poor women.<br>Key Features: Provide credit for livelihood activities, housing, micro-enterprises, and family needs.",
      },
      {
        name: "Nari Shakti Puraskar",
        testimonial:
          "Objective: Recognize the efforts of women in various fields and their contribution towards the empowerment of women.<br>Key Features: Annual awards given by the Ministry of Women and Child Development.",
      },
      {
        name: "Mahila E-Haat",
        testimonial:
          "Objective: Empower women entrepreneurs, self-help groups (SHGs), and NGOs by providing an online marketing platform.<br>Key Features: Direct interface between buyers and sellers, facilitating financial inclusion and digital literacy.",
      },
                        
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <h3>${testimonials[i].name}</h3><br>
      <p>${testimonials[i].testimonial}</p>
    `;
  };
  window.onload = displayTestimonial;