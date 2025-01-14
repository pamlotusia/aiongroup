import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.accordionItem}>
      <button 
        onClick={toggleOpen} 
        style={styles.button}
        aria-expanded={isOpen}
      >
        {title}
      </button>
      {isOpen && <div style={styles.content}>{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const items = [
    { title: 'Atendimento Personalizado', content: 'Nossa abordagem centrada no cliente garante que cada projeto seja tratado com a máxima atenção e dedicação, resultando em soluções que verdadeiramente atendem às suas necessidades.' },
    { title: 'Resultados Comprovados', content: 'Temos um histórico de sucesso comprovado, com inúmeros casos de clientes que alcançaram melhorias significativas em suas operações e finanças graças aos nossos serviços.' },
    { title: 'Parceria de Longo Prazo', content: 'Valorizamos relações duradouras e trabalhamos para ser parceiros confiáveis a longo prazo, oferecendo suporte contínuo e inovação constante.' },
  ];

  return (
    <div style={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem 
        
          key={index} 
          title={item.title} 
          content={item.content} 
        />
      ))}
    </div>
  );
};

const styles = {
  accordion: {
    maxWidth: '100%',
    margin: '1.2rem auto',
  },

  accordionItem: {
    maxWidth: '100%',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    border: 'none',
    borderRadius: '5px 5px 0 0',
    cursor: 'pointer',
    fontSize: '1rem',

  },
  content: {
    maxWidth: '100%',
    padding: '1rem',
    backgroundColor: '#fff',
    borderTop: '1px solid #ccc',
  },
};

export default Accordion;
