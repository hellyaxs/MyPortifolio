export default function Contact() {

    return (

    <section className="contact section" id="contact">
    <h2 className="section_title ">Contato</h2>
    
    <div className="contact_container container grid">
      <div className="div_contact">

        <div className="contact_information">
          <i className="uil uil-whatsapp contact_icon"></i>
          <div>
            <h3 className="contact_title">Whatsapp</h3>
            <span className="contact_subtitle"><a href="https://api.whatsapp.com/send?phone=+5581991426794&text=Olá Elias! te achei através de seu portfólio." target="_blank">(81) 99142 - 6794</a></span>
            </div>
            </div>
 
            <div className="contact_information">
              <i className="bi bi-at contact_icon"></i>
             <div>
               <h3 className="contact_title">Mande um E-Mail</h3>
               <span className="contact_subtitle"> <a href="mailto:eliasvitor.dev@gmail.com">eliasvitor.dev@gmail.com</a> </span>
             </div>
            </div>
 
            <div className="contact_information">
              <i className="bi bi-geo-alt contact_icon"></i>
             <div>
               <h3 className="contact_title">Localização</h3>
               <span className="contact_subtitle"> Belo Jardim - PE</span>
             </div>
            </div>
        </div>
      
       
      </div>
  </section>
    );
}