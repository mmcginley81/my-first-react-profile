import React from 'react';
import About from '../About';
import ContactForm from '../ContactForm';
import Projects from '../Projects';


function Page({ currentPage }){

    const renderPage = () => {
        
        switch(currentPage.name) {
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            case 'Contact':
                return <ContactForm />
        }
    }
    
    return(

        <section>
            <div>{renderPage()}</div>
        </section>
    )

}

export default Page;