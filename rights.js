//Testimonial Data
const testimonials = [
    {
      name: "Educational Rights",
      testimonial:
        "Access to Education: Ensuring girls and women have equal access to education at all levels.<br>Eliminating Gender Bias: Addressing and eliminating gender biases in educational materials and environments.",
    },
    {
        name: "Economic Rights",
        testimonial:
          "Equal Pay: Ensuring women receive equal pay for equal work.<br>Employment Opportunities: Promoting equal opportunities for women in the workplace and in career advancement.<br>Maternity Leave: Ensuring women have the right to paid maternity leave and job security during and after pregnancy.",
      },
      {
        name: "Political Rights",
        testimonial:
          "Voting Rights: Ensuring women have the right to vote and participate in democratic processes.<br>Political Representation: Promoting equal representation of women in political offices and decision-making bodies.",
      },
      {
        name: "Health Rights",
        testimonial:
          "Reproductive Rights: Ensuring women have the right to make decisions about their reproductive health, including access to contraception and safe abortion services.<br>Healthcare Access: Promoting equal access to healthcare services for women, including maternal and child healthcare.",
      },
      {
        name: "Freedom from Violence",
        testimonial:
          "Domestic Violence: Implementing and enforcing laws to protect women from domestic violence and providing support services for survivors.<br>Sexual Harassment and Assault: Enforcing laws against sexual harassment and assault, and ensuring proper support and justice for survivors.",
      },
      {
        name: "Social Rights",
        testimonial:
          "Freedom from Discrimination: Ensuring women are free from discrimination in all aspects of life, including social, economic, and political spheres.<br>Cultural and Religious Rights: Respecting and promoting women's rights within cultural and religious contexts, while challenging practices that harm women's rights and well-being.",
      },
      {
        name: "Empowerment and Advocacy",
        testimonial:
          "Leadership Opportunities: Promoting leadership opportunities for women in all sectors.<br>Awareness and Education: Raising awareness about women's rights and educating both women and men about gender equality.",
      },
      {
        name: "Legal Rights",
        testimonial:
          "Property Rights: Ensuring women have the right to own and inherit property.<br>Marriage and Divorce: Ensuring women have equal rights in marriage, divorce, and child custody.",
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