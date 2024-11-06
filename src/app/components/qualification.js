import React, { useState } from 'react';
import Title from './utils/title';
import { RevealWrapper } from 'next-reveal';

export default function Qualification() {

    const [open, setOpen] = useState(false);

    return (
      <RevealWrapper>
        <section className="my-40 pt-10 pb-16 px-0 mb-12 text-center">
        <div className="qualification_container container justify-center items-center"> 
          <Title subtitle={"training"} title="formação" icon={"mortarboard"} />
       
  
          <div className="tab-wrap">
            <div className="tab">
              <button className="tab_button" onClick={() => setOpen(true)} >Graduação</button>
              <button className="tab_button" onClick={() => setOpen(false)} >Experiência</button>
            </div>
            {open ? (<>
              <div id="Formacao" className="tabcontent">
              <div className="qualification_titles">
                <h3 className="qualification_name">Engenharia da Computação</h3>
                <p className="qualification_description">Universidade Federal Rural de Pernambuco</p>
  
                    <div className="status">
                      <span className="qualification_number"><span className="pont-red">80%</span></span>
                      </div>
  
                    <div className="qualification_calendar">
                      <i className="uil uil-calendar-alt"></i>
                      2020 - 2025
                    </div>
                  </div>

                  <div className="qualification_bar">
                    <div className="qualification_percentage qualification_ufrpe">
                    </div>
                  </div>
                <div className="qualification_titles">
                    <h3 className="qualification_name">Analise de Desenvolvimento de Sistemas</h3>
                    <p className="qualification_description">Escola Técnica Estadual - Edson Mororó Moura</p>
      
                        <div className="status">
                          <span className="qualification_number"><span className="pont-green">100%</span></span>
                          </div>
      
                        <div className="qualification_calendar">
                          <i className="uil uil-calendar-alt"></i>
                          2017 - 2019
                        </div>
                      </div>
    
                      <div className="qualification_bar">
                        <div className="qualification_percentage qualification_ete">
                        </div>
                      </div> 
            </div>

            </>):(<>
            
              <div id="Experiência" className="tabcontent">            
                <div className="qualification_titles">
               <h3 className="qualification_name">Oportunidade</h3>
                  <p className="qualification_description qualification_exp">Buscando uma oportunidade no mercado de trabalho.</p>
                  <p className="qualification_description qualification_exp">Entre em contato:  <a className="qualification_exp-a" href="mailto:eliasvitor.dev@gmail.com">
                    <span className="exp-text">Email:</span> eliasvitor.dev@gmail.com</a>
                  <a className="qualification_exp-a" href="https://api.whatsapp.com/send?phone=+5581991426794&text=Olá elias!" target="_blank"><span className="exp-text">Whatsapp:</span> (81) 99142 - 6794</a> </p>
                </div>
                </div>
            </>)
             }
            
            
    
  
          </div>
          </div>
    </section>
    </RevealWrapper>
    )
}