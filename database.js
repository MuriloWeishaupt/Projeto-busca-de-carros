let carros = [
{
    nome: 'RS6',
    marca: 'Audi',
    descricao: "A Audi RS6: Um Monstro Disfarçado de Perua. A Audi RS6 é a personificação do desempenho em um pacote elegante e prático. Com um motor V8 biturbo de 4.0 litros capaz de gerar mais de 600 cavalos de potência, a RS6 acelera de 0 a 100 km/h em tempo recorde, transformando a experiência de dirigir em uma verdadeira emoção.",
    link: "https://www.audi.com.br/br/web/pt/models/a6/rs-6-avant.html",
    tags: "esportivo, perua, alemão, turbo, luxo, alto_desempenho, quatro_anelos"
},

{
    nome: '911',
    marca: 'Porsche',
    descricao: "A Porsche 911 é um ícone do automobilismo, sinônimo de performance e design atemporal. Com seu motor boxer de 6 cilindros e tração traseira, a 911 oferece uma experiência de condução única e emocionante. Seja na pista ou nas ruas, a 911 proporciona um prazer de dirigir incomparável.",
    link: "https://www.porsche.com/brazil/pt/models/911/",
    tags: "esportivo, cupê, alemão, boxer, clássico, ícone, porsche"
},
{
    nome: 'M2',
    marca: 'BMW',
    descricao: "A BMW M2 é a definição de um esportivo puro. Com seu motor turbo de 6 cilindros em linha, a M2 oferece um desempenho emocionante e uma agilidade incrível. Seu design esportivo e interior focado no motorista completam a experiência de condução.",
    link: "https://www.bmw.com.br/pt/all-models/m-series/m2-coupe/2022/bmw-2-series-coupe-m-automobiles-overview.html",
    tags: "esportivo, cupê, alemão, turbo, bmw, m_performance"
},

{
    nome: 'Aventador SVJ',
    marca: 'Lamborghini',
    descricao: "O Lamborghini Aventador SVJ é a expressão máxima do desempenho e da aerodinâmica, com um motor V12 atmosférico de 770 cv que o catapulta a velocidades inimagináveis. Seu design agressivo e tecnologias avançadas o tornam um ícone instantâneo.",
    link: "https://www.lamborghini.com/en/models/aventador-svj",
    tags: "esportivo, italiano, v12, supercarro, lamborghini, toro, aerodinâmica, desempenho"
},
{
    nome: 'DB11',
    marca: 'Aston Martin',
    descricao: "O Aston Martin DB11 combina luxo e performance em um pacote elegante. Seu motor V12 biturbo oferece uma experiência de condução suave e poderosa, enquanto o interior sofisticado proporciona conforto e estilo.",
    link: "https://www.astonmartin.com/en/models/db11",
    tags: "esportivo, britânico, luxo, grand_tourer, aston_martin, james_bond, v12, conforto"
},
{
    nome: 'Huracán STO',
    marca: 'Lamborghini',
    descricao: "O Huracán STO é um superesportivo focado em pista, inspirado nos carros de corrida da Lamborghini Squadra Corse. Com um motor V10 atmosférico e um chassi leve, ele oferece uma experiência de condução pura e emocionante.",
    link: "https://www.lamborghini.com/en/models/huracan-sto",
    tags: "esportivo, italiano, v10, lamborghini, toro, pista, corrida, leve"
},

{
    nome: 'Nissan GT-R',
    marca: 'Nissan',
    descricao: "O Nissan GT-R é um supercarro japonês conhecido por sua tração integral e motor V6 biturbo, oferecendo um equilíbrio perfeito entre desempenho e tecnologia.",
    link: "https://www.nissanusa.com/vehicles/gt-r.html",
    tags: "esportivo, japonês, turbo, nissan, gtr, tração_integral, desempenho"
},
{
    nome: 'McLaren 720S',
    marca: 'McLaren',
    descricao: "O McLaren 720S é um supercarro britânico com design futurista e um motor V8 biturbo de 720 cv, proporcionando uma aceleração brutal e manobrabilidade precisa.",
    link: "https://cars.mclaren.com/720s",
    tags: "esportivo, britânico, supercarro, mclaren, turbo, desempenho, design"
},
{
    nome: 'Ford Mustang GT',
    marca: 'Ford',
    descricao: "O Ford Mustang GT é um ícone americano, com um motor V8 potente e um design clássico que evoca a nostalgia dos muscle cars.",
    link: "https://www.ford.com/mustang/",
    tags: "esportivo, americano, muscle_car, ford, mustang, v8, clássico"
},
{
    nome: 'Audi R8',
    marca: 'Audi',
    descricao: "O Audi R8 é um supercarro com motor central e tração integral, oferecendo um equilíbrio entre desempenho e dirigibilidade. Seu design elegante e tecnologia avançada o tornam uma opção atraente.",
    link: "https://www.audi.com/en/models/r8.html",
    tags: "esportivo, alemão, audi, r8, motor_central, tração_integral, design"
},
{
    nome: 'Ferrari Roma',
    marca: 'Ferrari',
    descricao: "A Ferrari Roma é um grand tourer elegante e potente, com um design atemporal e um motor V8 turbo que oferece uma experiência de condução emocionante.",
    link: "https://www.ferrari.com/en/cars-models/roma",
    tags: "esportivo, italiano, ferrari, roma, grand_tourer, v8, luxo"
},
{
    nome: 'BMW M4 Competition',
    marca: 'BMW',
    descricao: "O BMW M4 Competition é um cupê esportivo de alta performance, com um motor turbo de seis cilindros em linha e um chassi afinado para proporcionar uma experiência de condução emocionante.",
    link: "https://www.bmw.com/us/all-models/m-series/m4-coupe/2023/bmw-4-series-coupe-m-automobiles-overview.html",
    tags: "esportivo, alemão, bmw, m4, competição, turbo, seis_cilindros"
},
{
    nome: 'Porsche 718 Cayman GT4',
    marca: 'Porsche',
    descricao: "O Porsche 718 Cayman GT4 é um esportivo de motor central com um chassi leve e um motor de seis cilindros boxer atmosférico, oferecendo uma experiência de condução pura e envolvente.",
    link: "https://www.porsche.com/usa/models/718-cayman/718-cayman-gt4/",
    tags: "esportivo, alemão, porsche, cayman, gt4, motor_central, boxer"
},
{
    nome: 'Mercedes-AMG GT',
    marca: 'Mercedes-Benz',
    descricao: "O Mercedes-AMG GT é um grand tourer esportivo com um design elegante e um motor V8 biturbo, oferecendo uma combinação de luxo e desempenho.",
    link: "https://www.mercedes-benz.com/en/passengercars/models/gt/gt-coupe/",
    tags: "esportivo, alemão, mercedes_benz, amg, gt, grand_tourer, v8"
},
{
    nome: 'Aston Martin Vantage',
    marca: 'Aston Martin',
    descricao: "O Aston Martin Vantage é um esportivo britânico com um design agressivo e um motor V8 biturbo, oferecendo uma experiência de condução emocionante e sofisticada.",
    link: "https://www.astonmartin.com/en/models/vantage",
    tags: "esportivo, britânico, aston_martin, vantage, v8, desempenho"
},
{
    nome: 'Lexus LC500',
    marca: 'Lexus',
    descricao: "O Lexus LC500 é um grand tourer de luxo com um design elegante e um motor V8 atmosférico, oferecendo uma combinação de conforto e desempenho.",
    link: "https://www.lexus.com/usa/models/lc/",
    tags: "luxo, grand_tourer, lexus, lc500, v8, design"
},


{
    nome: 'Porsche Taycan Turbo S',
    marca: 'Porsche',
    descricao: "O Porsche Taycan Turbo S é um sedan elétrico de alto desempenho que combina a tradição da marca com a tecnologia do futuro. Seu motor elétrico oferece uma aceleração brutal e uma autonomia impressionante.",
    link: "https://www.porsche.com/usa/models/taycan/",
    tags: "elétrico, esportivo, alemão, porsche, taycan, turbo, desempenho, elétrico"
},
{
    nome: 'Tesla Model S Plaid',
    marca: 'Tesla',
    descricao: "O Tesla Model S Plaid é um sedan elétrico de luxo com desempenho excepcional. Seu sistema de tração dual e bateria de alta capacidade proporcionam uma aceleração e autonomia líderes de mercado.",
    link: "https://www.tesla.com/models",
    tags: "elétrico, sedan, luxo, tesla, model_s, plaid, desempenho, autonomia"
},
{
    nome: 'Rivian R1T',
    marca: 'Rivian',
    descricao: "O Rivian R1T é uma picape elétrica com um design futurista e capacidade off-road. Seu sistema de tração nas quatro rodas e bateria de alta capacidade o tornam ideal para aventuras ao ar livre.",
    link: "https://rivian.com/r1t",
    tags: "elétrico, picape, off_road, rivian, r1t, aventura, elétrico"
},
{
    nome: 'Ford Bronco',
    marca: 'Ford',
    descricao: "O Ford Bronco é um SUV off-road de volta às raízes, com um design clássico e moderno ao mesmo tempo. Seu sistema de tração nas quatro rodas e suspensão robusta o tornam ideal para trilhas e aventuras.",
    link: "https://www.ford.com/bronco/",
    tags: "off_road, suv, americano, ford, bronco, aventura, 4x4"
},
{
    nome: 'Jeep Wrangler',
    marca: 'Jeep',
    descricao: "O Jeep Wrangler é um ícone do off-road, com um design robusto e capacidades off-road incomparáveis. Seu sistema de tração nas quatro rodas e suspensão articulada permitem que ele vença qualquer obstáculo.",
    link: "https://www.jeep.com/wrangler.html",
    tags: "off_road, suv, jeep, wrangler, 4x4, aventura"
},
{
    nome: 'Land Rover Defender',
    marca: 'Land Rover',
    descricao: "O Land Rover Defender é um SUV off-road de luxo, com um design icônico e capacidades off-road lendárias. Seu sistema de tração nas quatro rodas e suspensão a ar o tornam ideal para qualquer terreno.",
    link: "https://www.landrover.com/vehicles/defender.html",
    tags: "off_road, suv, luxo, land_rover, defender, 4x4, aventura"
},
{
    nome: 'Toyota GR Supra',
    marca: 'Toyota',
    descricao: "O Toyota GR Supra é um esportivo puro com um design clássico e um motor turbo de seis cilindros em linha, oferecendo uma experiência de condução emocionante.",
    link: "https://www.toyota.com/supra/",
    tags: "esportivo, japonês, toyota, supra, turbo, seis_cilindros, desempenho"
},
{
    nome: 'Hyundai N',
    marca: 'Hyundai',
    descricao: "A linha Hyundai N oferece uma gama de modelos esportivos com desempenho de alta performance, como o i30 N e o Veloster N, com motores turbo e suspensões esportivas.",
    link: "https://www.hyundaiusa.com/shopping/performance/n/",
    tags: "esportivo, coreano, hyundai, n, turbo, desempenho"
},
{
    nome: 'Mazda MX-5',
    marca: 'Mazda',
    descricao: "O Mazda MX-5 é um roadster esportivo com um design clássico e um motor de quatro cilindros, oferecendo uma experiência de condução pura e prazerosa.",
    link: "https://www.mazdausa.com/vehicles/mx-5-miata/",
    tags: "esportivo, roadster, japonês, mazda, mx-5, quatro_cilindros, clássico"
},
{
    nome: 'Alfa Romeo Giulia Quadrifoglio',
    marca: 'Alfa Romeo',
    descricao: "O Alfa Romeo Giulia Quadrifoglio é um sedan esportivo italiano com um motor V6 biturbo e um chassi afinado para oferecer uma experiência de condução emocionante.",
    link: "https://www.alfaromeousa.com/models/guilia/quadrifoglio",
    tags: "esportivo, italiano, alfa_romeo, giulia, quadrifoglio, v6, desempenho"
},

{
nome: 'Fiat 500',
marca: 'Fiat',
descricao: "O Fiat 500 é um carro compacto e estiloso, ideal para a cidade. Seu design retrô e motor eficiente o tornam uma opção popular.",
link: "https://www.fiat.com.br/500",
tags: "compacto, urbano, italiano, fiat, 500, estiloso",
},

{
nome: 'Ram 1500',
marca: 'Ram',
descricao: "A Ram 1500 é uma picape full-size com capacidade de carga e reboque impressionantes. Seu interior luxuoso e motor potente a tornam uma escolha popular para trabalho e lazer.",
link: "https://www.ramtrucks.com/1500.html",
tags: "picape, full_size, americana, ram, 1500, carga"
},

{
nome: 'Honda Civic',
marca: 'Honda',
descricao: "O Honda Civic é um sedan compacto conhecido por sua confiabilidade e economia de combustível. Oferece um bom equilíbrio entre desempenho e eficiência.",
link: "https://www.honda.com/civic/",
tags: "compacto, sedan, japonês, honda, civic, econômico"
},

{
nome: 'Lamborghini Urus',
marca: 'Lamborghini',
descricao: "O Lamborghini Urus é um SUV de alto desempenho que combina a potência de um supercarro com a versatilidade de um SUV. Seu motor V8 biturbo oferece uma experiência de condução emocionante, enquanto seu design imponente chama a atenção por onde passa.",
link: "https://www.lamborghini.com/en/models/urus",
tags: "suv, italiano, lamborghini, urus, v8, desempenho, luxo"
},

{
nome: 'Porsche Cayenne',
marca: 'Porsche',
descricao: "O Porsche Cayenne é um SUV de luxo com um desempenho esportivo e um interior sofisticado. Seu motor V8 biturbo oferece uma potência impressionante, enquanto seu sistema de suspensão adaptativo garante um passeio confortável.",
link: "https://www.porsche.com/brazil/pt/models/cayenne/",
tags: "suv, alemão, porsche, cayenne, v8, luxo, desempenho"
},

{
nome: 'Mercedes-Benz Classe G',
marca: 'Mercedes-Benz',
descricao: "A Mercedes-Benz Classe G é um ícone do off-road, com um design robusto e capacidades off-road incomparáveis. Seu motor V8 biturbo e sistema de tração nas quatro rodas garantem uma experiência de condução emocionante em qualquer terreno.",
link: "https://www.mercedes-benz.com/en/passengercars/models/g-class/",
tags: "off_road, suv, alemão, mercedes_benz, classe_g, v8, luxo"
},

{
nome: 'BMW i3',
marca: 'BMW',
descricao: "O BMW i3 é um hatch compacto totalmente elétrico, com design futurista e interior inovador. Sua autonomia é suficiente para o dia a dia, e seu motor elétrico oferece uma aceleração suave e silenciosa.",
link: "https://www.bmw.com/br/all-models/i-series/i3/2023/bmw-i3-electric-vehicle-overview.html",
tags: "elétrico, compacto, alemão, bmw, i3, urbano, sustentável"
},

{
nome: 'Ford Mustang Mach-E',
marca: 'Ford',
descricao: "O Ford Mustang Mach-E é um SUV elétrico com design inspirado no icônico Mustang. Seu desempenho é impressionante, com aceleração rápida e autonomia considerável. É a opção perfeita para quem busca um SUV elétrico com um toque de esportividade.",
link: "https://www.ford.com/mustang-mach-e/",
tags: "elétrico, suv, americano, ford, mustang, mach-e, desempenho"
},

{
nome: 'Fiat Pulse',
marca: 'Fiat',
descricao: "O Fiat Pulse é um SUV compacto com design moderno e tecnologias avançadas. É uma opção versátil e ideal para o dia a dia, oferecendo um bom espaço interno e um porta-malas generoso.",
link: "https://www.fiat.com.br/pulse",
tags: "suv, compacto, italiano, fiat, pulse, urbano"
},

{
nome: 'Volkswagen ID.4',
marca: 'Volkswagen',
descricao: "O Volkswagen ID.4 é um SUV elétrico com design moderno e interior espaçoso. Sua autonomia é suficiente para viagens longas, e seu sistema de infoentretenimento é intuitivo e fácil de usar.",
link: "https://www.volkswagen.com.br/modelos/id.4",
tags: "elétrico, suv, alemão, volkswagen, id.4, autonomia"
}

]
