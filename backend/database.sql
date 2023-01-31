/************** TABLE currency *****************/

DROP TABLE IF EXISTS currency;

CREATE TABLE
    currency (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NULL,
        metal VARCHAR(100) NULL,
        date_history INT NULL,
        value VARCHAR(50) NULL,
        price VARCHAR(100) NULL,
        country VARCHAR(255) NULL,
        picture VARCHAR(255),
        content VARCHAR(3000),
        devise VARCHAR(100)
    );

INSERT INTO
    currency (
        name,
        metal,
        date_history,
        value,
        price,
        country,
        picture,
        content,
        devise
    )
VALUES (
        'Iron Maiden',
        'Argent',
        '2022',
        '5',
        '90€',
        'Niue',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_b4a9e8a6-efbd-43a6-9fe4-926c59c5d4d8.jpg?v=1669103192',
        "Cette pièce d'argent à l'aspect sinistre et vampirique célèbre le 30e anniversaire de l'album  Fear of the Dark. Le groupe de métal légendaire Iron Maiden a sorti l'album en mai 1992 et a rapidement atteint la première place des classements d'albums au Royaume-Uni. Ce fut le dernier album où Bruce Dickinson fut le chanteur principal du groupe, jusqu'à son retour en 1999. La pochette de l'album représente la mascotte du groupe, Eddie, sous la forme d'une sorte d'arbre Nosferatu qui se penche sous la lune scintillante.",
        'Dollars'
    ), (
        'The Way of the Dreams Robert Lewandowski ',
        'Argent',
        '2021',
        '5',
        '390€',
        'Irlande du Nord',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_8fab21b5-0481-4237-a2b2-00b03d851d2f.jpg?v=1668515826',
        "Cette pièce a été frappée à partir de 2 onces d'argent fin dans un tirage limité de 3000 pièces. Ce facteur en fait une excellente pièce de collection. Le revers de la pièce représente Robert Lewandowski, dont le talent pour jouer au football est apparu dans son enfance et l'a conduit dans les meilleurs clubs de football du monde. La pièce est ornée d'un insert 3D imitant une balle. Sur l'avers, en plus de l'émetteur et de la valeur faciale, la pièce présente le maillot de Robert Lewandowski de sa jeunesse et de sa carrière d'adulte. La pièce est livrée dans une élégante boîte en bois avec un certificat d'authenticité.",
        'Dollars'
    ), (
        'Temple of Heaven',
        'Argent',
        '1889',
        '35',
        '600€',
        'Beijing',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_af21926c-7a8d-474b-9750-8630cf4b4ed0.jpg?v=1669192955',
        "Le Temple du Ciel est considéré comme l'accomplissement suprême de l'architecture traditionnelle chinoise. La structure la plus impressionnante et la plus célèbre du complexe du temple est la salle des prières pour les bonnes récoltes. Construite sur trois niveaux de pierre marbrière, elle est entièrement réalisée en bois, sans aucun clou. Cette étonnante salle servait aux empereurs des dynasties Ming et Qing pour les offrandes au ciel en quête de riches récoltes. Construite en 1402 à Pékin, la construction de cette merveille architecturale s'est achevée en 1420, en même temps que la Cité interdite. Malheureusement, le complexe original a brûlé dans un incendie provoqué par la foudre en 1889. Quelques années plus tard, il a été reconstruit à l'identique. Chaque pièce est fournie dans son écrin d'origine.",
        'Dollars'
    ), (
        'Big Five Asia Tiger',
        'Argent',
        '2021',
        '5000',
        '650€',
        'Cote Ivoire',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_646f6696-c2ca-4afb-b199-c6fc7db349e4.jpg?v=1664350236',
        "Le lanceur de la série Big Five Asia, le Tiger, était un succès instantané. Comme le tirage complet de 999 exemplaires a été vendu rapidement, nous avons pensé à une autre version de ce motif populaire. Le résultat est tout simplement impressionnant. Merci au tout nouveau revêtement céramique mat et aux couleurs yeux, le Tigre a l'air encore plus noble que le premier pièce d'argent.",
        'Francs CFA'
    ), (
        'Boxing - Golden Highlights',
        'Or',
        '-3000',
        '1',
        '90€',
        'Palau',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_a9b549cf-4cb9-499a-9fe1-781a18eb30be.jpg?v=1669104003',
        "Avec ses origines les plus anciennes remontant au troisième millénaire avant J.-C., la boxe est l'épreuve ultime de force dans un sport à un contre un. Les Grecs anciens ont même inclus ce sport dans leurs jeux olympiques il y a des milliers d'années. Les temps modernes ont vu la popularité de ce sport croître grâce à des combattants comme Muhammad Ali, Rocky Marciano, Floyd Mayweather Jr. et Mike Tyson, entre autres. La boxe a même été portée à l'écran avec des classiques tels que Raging Bull et la franchise Rocky. Ce demi-gramme d'or pur est le cadeau idéal pour le combattant prisé de chacun.",
        'Dollars'
    ), (
        'Big Five Africa - Water Buffalo',
        'Argent',
        '2020',
        '10 000',
        '17 000€',
        'Cote Ivoire',
        'mapiece.jpeg',
        "Le puissant buffle d'eau marque le dernier numéro du Big Five Africa en 5 oz. or pur. Compte tenu de la haute demande pour les quatre premiers numéros de cette série, la Water Buffalo fera sûrement suite à ce succès. La combinaison du haut-relief très détaillé et de l'antique font de cette pièce une pièce unique en son genre. Le tirage est strictement limité à 99 pièces dans le monde.",
        'Francs CFA'
    ), (
        'Sparta',
        'Cuivre',
        '431',
        '5',
        '60€',
        'Athènes',
        'mapiece.jpeg',
        "Les Spartiates - des guerriers musclés et intrépides de la Grèce antique - étaient réputés pour leur armée quasi invincible et leurs compétences inégalées en matière de combat à l'aide de longues lances, d'épées et de boucliers ronds fabriqués en bronze et en bois, qui ont captivé l'imagination pendant des siècles. Les mythes qui entourent Sparte et sa société de guerriers sont aussi vieux que la ville elle-même. Réputée fondée au 9e siècle avant J.-C., elle était co-dirigée par deux rois qui arbitraient en temps de guerre. Après sa victoire sur la cité-État rivale d'Athènes lors de la guerre du Péloponnèse (431-404 av. J.-C.), Sparte est devenue l'État le plus puissant de Grèce. Le verso représente Le retour d'Hélène sur un quadrige",
        'Dollars'
    ), (
        'In Memoriam Queen Elizabeth II',
        'Or',
        '2022',
        '5',
        '300€',
        'Irlande du Nord',
        'mapiece.jpeg',
        "Elizabeth II, reine du Royaume-Uni de Grande-Bretagne et d'Irlande du Nord, est l'une des personnalités les plus influentes du XXe siècle. Bien que le paysage politique du Royaume-Uni et du monde ait radicalement changé au cours de ses 70 ans de règne, Elizabeth II est restée un monarque très apprécié et populaire dans le monde entier. Le décès de Sa Majesté marque la fin d'une ère remarquable, que le monde ne verra peut-être pas avant des années.",
        'Dollars'
    ), (
        'Baseball - Golden Highlights',
        'Or',
        '1982',
        '1',
        '1150€',
        'Palau',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_ebd574b4-ad70-45f1-bd62-649f026f430c.jpg?v=1669104351',
        "De l'excitation du jour d'ouverture à l'excitation des courses d'automne, des millions de personnes profitent chaque année dupasse-temps de l'Amériqu. Qu'il s'agisse d'encourager l'équipe locale par un après-midi ensoleillé ou d'être un jeune joueur de petite ligue rêvant de frapper le point gagnant du match au fond de la neuvième manche, le baseball fait partie de la vie américaine depuis les années 1800. La dernière nouveauté de la collectionGolden Highlight rend hommage à l'or pur avec un demi-gramme en forme de balle de baseball, parfait pour les fans et les rêveurs",
        'Dollars'
    ), (
        'Cyber Queen - The Beginning',
        'Argent',
        '1985',
        '20',
        '300€',
        'Irlande du Nord',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_e5dcd1b7-2da5-4f10-a7f0-26427eda55f5.jpg?v=1669107882',
        "Le cyberpunk est un sous-genre de la science-fiction caractérisé par des anti-héros luttant contre un système ou des oppresseurs dans un futur dystopique déshumanisé et high-tech. Le terme Cyberpunk dérive de la combinaison des mots cybernétique, la science du remplacement des fonctions humaines par des ordinateurs, et punk, le style de musique. Dans les années 1980, le genre a acquis une popularité mondiale grâce au roman Neuromancer de William Gibson et au film culte Blade Runner. D'autres films comme RoboCop et Judge Dredd sont sortis peu après. Enfin, Matrix s'est avéré être le film le plus influencé par le cyberpunk de son époque.",
        'Dollars'
    ), (
        'Completer Coin',
        'Argent',
        '-3300',
        '5000',
        '580€',
        'Cote Ivoire',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_2a11ab2b-a8e6-453e-ba3d-dc746a7f8bf3.jpg?v=1664346529',
        "La série Big Five est la plus populaire et la plus réussie de notre portefeuille produits, quel que soit le grammage ou métal précieux. Mais aucune série n'est complète sans une pièce finale représentant tous ses motifs. Cet exceptionnel 5 oz. La pièce en argent fin 999 complète la série Big Five Africa avec tous les motifs originaux. La pièce est un incontournable pour tous collectionneur de la célèbre série Big Five Africa.",
        'Francs CFA'
    ), (
        'Mongolie sauvage',
        'Cuivre',
        '1720',
        '250',
        '50€',
        'Mongolie',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_bed51e7f-9c5b-467a-94f0-7cc3329da17e.png?v=1655363342',
        "Lors du lancement fait en hiver, plus tôt cette année, nous avons lancé le Magnificent Argali, le successeur du Majestic Eagle et du Mystic Wolf, pour montrer les possibilités de la technologie smartminting® améliorée. Fort de ce succès, une pièce qualité BE noire argentée et une version en cuivre ont été lancées. Ces deux finitions spéciales sont devenues un moyen très populaire de collectionner la série et présentent les mêmes dessins incroyables que ceux du lancement d'hiver.La pièce BE noire argentée de 2 onces permet de voir chaque détail dans toute leur clarté. Que ce soit les poils de fourrure individuels, l'éclat du bélier qui vous regarde en arrière-plan, ou encore les superbes cornes, tout est là, en ultra-haut relief ! Le cuivre de 50 grammes est tout aussi impressionnant en termes de relief et de clarté du dessin, tout en affichant la couleur qui est propre aux pièces en cuivre.",
        'Togrog'
    ), (
        'Legacy of the Pharaohs',
        'Cuivre',
        '-1335',
        '1',
        '90€',
        'Le Caire',
        'mapiece.jpeg',
        "Chacune de ces pièces en ultra-haut relief intelligentes montre trois pharaons différents au revers et une incroyable vue à vol d’oiseau de la nécropole de Gizeh sur l’avers. Les trois pharaons présentés sont Akhenaton, Thoutmosis III et Sobekneferu, la première femme pharaon. Chacun ayant son propre look distinctif. Derrière eux se trouvent des hiéroglyphes de l’ancien artefact « La stèle révélatrice » qui se trouve au musée Boulak au Caire.",
        'Dollars'
    ), (
        'Elephant Big Five',
        'Or',
        '320',
        '100',
        '860€',
        'Asie',
        'mapiece.jpeg',
        "Cette magnifique pièce d'or de 1 oz est la dernière sortie de la série Big Five consacrée à certaines des espèces les plus fascinantes du monde. Dans cette édition, il s'agit de l'éléphant. La pièce présente un énorme dessin en haut-relief, une qualité de finition antique et est livrée dans un étui, avec le certificat d'authenticité. Tirage limité à 199 pièces dans le monde entier.",
        'Francs CFA'
    ), (
        'World s Famous Bridges - Pont de Brooklyn',
        'Argent',
        '2018',
        '5000',
        '600€',
        'Brooklyn',
        'https://cdn.shopify.com/s/files/1/0021/7887/5438/products/1_6a489230-8b4c-4c63-bd0d-081a7aa19e5f.jpg?v=1664278346',
        "Bienvenue au point culminant de l'année en matière de pièces ! Aucun autre que le célèbre médaillé français Joaquin Jimenez, chef créateur de la Monnaie de Paris et créateur de nombreux dessins de pièces populaires, est responsable de la conception de cette nouvelle pièce sensationnelle. En plus de l'exceptionnel forme de la pièce, il allie finition antique, dorure partielle et même revêtement en émail. Le fruit de la collaboration entre Joaquin Jimenez et P. De Greef est absolument époustouflant.",
        'Francs'
    );

/************** TABLE USER *****************/

DROP TABLE IF EXISTS user;

CREATE TABLE
    user (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        email VARCHAR(200) NOT NULL,
        avatar VARCHAR(255),
        hashedPassword VARCHAR(100) NOT NULL,
        currency_id INT,
        FOREIGN KEY (currency_id) REFERENCES currency(id)
    );

INSERT INTO
    user (
        firstname,
        lastname,
        email,
        hashedPassword,
        avatar
    )
VALUES (
        'Davy',
        'ROBERT',
        'test@test.com',
        'test',
        'monavatar1.jpeg'
    ), (
        'Vito',
        'Corléone',
        'test1@test.com',
        'test',
        'monavatar2.jpeg'
    ), (
        'James',
        'BOND',
        'test2@test.com',
        'test',
        'monavatar3.jpeg'
    ), (
        'Warner',
        'BROS',
        'test3@test.com',
        'test',
        'monavatar4.jpeg'
    ), (
        'Tony',
        'MONTANA',
        'test4@test.com',
        'test',
        'monavatar5.jpeg'
    );