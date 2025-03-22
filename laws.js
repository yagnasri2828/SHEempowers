//Testimonial Data
const testimonials = [
     {
      name: "Constitutional Provisions",
      testimonial:
        "Article 14: Guarantees equality before the law.<br>Article 15(1): Prohibits discrimination by the state against any citizen on grounds of religion, race, caste, sex, or place of birth.<br>Article 15(3): Allows the state to make special provisions for women and children.<br>Article 16: Provides for equality of opportunity in matters of public employment.<br>Article 39(a): States that the citizens, men and women equally, have the right to an adequate means of livelihood.<br>Article 42: Directs the state to make provision for securing just and humane conditions of work and for maternity relief.",
     },
     {
        name: "Criminal Laws",
        testimonial:
          "Indian Penal Code (IPC)<br>Section 354: Assault or criminal force to woman with intent to outrage her modesty.<br>Section 376: Punishment for rape.<br>Section 498A: Husband or relative of husband subjecting a woman to cruelty.<br><br>Criminal Law (Amendment) Act, 2013: Enacted following the Nirbhaya case, this act brought significant changes, including stringent punishment for sexual offenses against women.",
      },
      {
        name: "Special Laws",
        testimonial:
          "The Dowry Prohibition Act, 1961: Prohibits the giving or taking of dowry.<br>The Protection of Women from Domestic Violence Act, 2005: Provides for more effective protection of the rights of women who are victims of violence of any kind occurring within the family.<br>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013: Protects women from sexual harassment at their place of work.",
      },
      {
        name: "Property and Inheritance Laws",
        testimonial:
          "Hindu Succession Act, 1956 (Amended in 2005): Provides equal inheritance rights to daughters as sons.<br>Muslim Personal Law (Shariat) Application Act, 1937: Governs property rights for Muslim women.<br>Christian and Parsi laws: Also have provisions for inheritance and property rights, with variations in specific regulations.",
      },
      {
        name: "Marriage and Divorce Laws",
        testimonial:
          "Hindu Marriage Act, 1955: Governs marriage and divorce among Hindus.<br>Muslim Personal Law (Shariat) Application Act, 1937: Governs marriage, divorce, and maintenance among Muslims.<br>Indian Divorce Act, 1869: Governs divorce among Christians.<br>Special Marriage Act, 1954: Provides for civil marriage and divorce for individuals of different religions or those who choose to marry outside traditional religious frameworks.",
      },
      {
        name: "Reservation and Representation",
        testimonial:
          "The 73rd and 74th Constitutional Amendments: Provide for reservation of seats for women in Panchayats and Municipalities.<br>Women’s Reservation Bill: Proposes to reserve 33% of all seats in the Lower House of Parliament of India, the Lok Sabha, and in all state legislative assemblies for women. (Note: This bill has seen significant debate but hasn't been enacted as law yet).",
      },
      {
        name: "Recent Developments",
        testimonial:
          "Triple Talaq Bill (Muslim Women (Protection of Rights on Marriage) Act, 2019): Criminalizes the practice of instant triple talaq (talaq-e-biddat) among Muslims.<br>Transgender Persons (Protection of Rights) Act, 2019: Includes provisions for the protection of transgender individuals, including transgender women.",
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