import React from "react";

// import image
import DogImg from "../assets/img/dogs/dog-contact.png";

const Contact = () => {
  return (
    <section className="bg-yellow-secondary pt-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-around">
          {/* image */}
          <div className="order-1 lg:-order-1 lg:mt-16">
            <img className="-mb-[12px]" src={DogImg} alt="Dog contact" />
          </div>
          {/* text */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-orange font-semibold mb-3">Contato</div>
            <div className="text-4xl text-blue font-extrabold">
              + 55 21 99999-9999
            </div>
            <div className="mb-7 text-blue">
              Horário de Funcionamento - Seg - Sab: 10am - 6pm
            </div>
            <button className="btn">Agende um horário</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
