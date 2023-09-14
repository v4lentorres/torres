import React from "react";

export const Recomendados = () => {
    return (
        <div className="header">
            <div className="p-3 mb-2 bg-dark text-white">
                <figure class="text-center">
                    <h3>Top 3 mas recomendados en la ultima semana</h3>
                </figure>
            </div>
           
        

            <div className="container.fluid">
                <div class="card mb-3">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/a-haunting-in-venice-poirot-6401acff4eb80.jpg?crop=1xw:1xh;center,top&resize=980:*" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Misterio en Venecia</h5>
                        <p class="card-text">Tras 'Asesinato en el Orient Express' y 'Muerte en el Nilo', el Hercules Poirot de Kenneth Branagh vuelve para resolver un tercer misterio en compañía de un nuevo elenco de estrellas: Michelle Yeoh, Jamie Dornan, Tina Fey, Jude Hill, Kyle Allen, Kelly Reilly y más se unen a la fiesta de Agatha Christie para meterse en un whodunit para quienes se quedaron con ganas de más 'Puñales por la espalda'. Ambientada en la Venecia después de la Segunda Guerra Mundial, 'Misterio en Venecia' sigue a un Poirot retirado que asiste a regañadientes a una sesión de espiritismo, donde uno de los asistentes será asesinado.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/la-monja-2-secuela-1555310166.jpg?crop=1xw:1xh;center,top&resize=980:*" class="card-img-bottom" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">La monja II</h5>
                        <p class="card-text">Vuelve el Warrenverso. A pesar del éxito de 'La monja' en 2018, la anunciada secuela se ha hecho esperar. En 'La monja 2', la hermana Irene a la que da vida Taissa Farmiga se volverá a encontrar cara a cara con Valak, la monja demonio y artífice de muchas de nuestras pesadillas. Michael Chaves, que ya tiene experiencia en este universo de terror tras dirigir 'La Llorona' y 'Expediente Warren: Obligado por el demonio', sustituye en la dirección a Corin Hardy.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/cerrar-los-ojos-mk-atmanolopavon-dsc0990-20221120-1670843058.jpg?crop=1xw:1xh;center,top&resize=980:*" class="card-img-bottom" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Cerrar los ojos</h5>
                        <p class="card-text">Todo un acontecimiento para el cine español: Víctor Erice, director de joyas de nuestro cine como 'El espíritu de la colmena', vuelve en 2023 con una nueva película bajo el título 'Cerrar los ojos'. Esta estreno llega treinta años después de su últimos trabajo, por lo que lo esperamos con mucha expectación. La historia se centra en la desaparición de un actor durante el rodaje de una película y cuenta en el reparto con José Coronado, María León y Manolo Solo, entre otros.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Recomendados;

