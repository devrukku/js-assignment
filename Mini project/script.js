let quotes=['Freedom is never given it is won.',
'With the past I have not hing to do nor with the future.I live now.',
'Art is too serious to be taken seriously.',
'It does not matter how slowly you go as long as you do not stop.',
'Optimism is the faith that leads to achievement.Nothing can be done without hope and confidence.',
'The best and most beautiful things in the world cannot be seen or even touched-they must be felt with the heart.',
'The journey of a thousand miles begins with one step.',
"Try to be a rainbow in someone's cloud.",
'There is nothing permanent except change.',
'Learning never exhausts the mind.',
'He who learns but does not think,is lost! He who thinks but does notlearn is in great danger.',
'Our greatest glory is not in never falling,but in rising every time we fall.',
'Everything has beauty,but not everyone sees it.',
'Learn from yesterday,live for today,hope for tomorrow.The important thing is not to stop questioning.',
'No problem can be solved from the same level of consciousness that created it.',
'Quality is not an act,itis a habit.',
'Dignity does not consist in possessing honors,but in deserving them.',
'Education is an ornament in prosperity and are fuge in adversity.',
'Threethingscannotbelonghidden:thesun,themoon,andthetruth.',
'Success is going from failure to failure without losing your enthusiasm.–WinstonChurchill',
'If you can dream it,you can achieve it.–ZigZiglar',
'The only way to do grea twork is to love what you do.–SteveJobs',
'Either write something worth reading or do something worth writing.–BenjaminFranklin',
'When everything seems to be going against you,remember that the airplane takes off against the wind not with it.-Henry Ford',
'Life is what we make it,always has been,always will be.–GrandmaMoses',
'You may be disappointed if you fail,but you are doomed ifyou don’t try.–BeverlySills',
'Dream big and dare to fail.–NormanVaughan',
'It does not matter how slowly you go as long as you donot stop.–Confucius',
'Build Your own dreams,or someone else will hire you to build theirs.–FarrahGray',
'I would rather die of passion than of boredom.–VincentvanGogh',
'I didn’t fail the test.I just found 100 ways to do it wrong.–BenjaminFranklin',
'Limit ations live only in our minds.But if we use our imaginations,our possibilities become limitless.–JamiePaolinetti',
'Challenges are what make life interesting and overcoming them is what makes life meaningful.–JoshuaJ.Marine',
'Too many of us are not living our dreams because we are living our fears.–LesBrown',
'If the wind will not serve ,take to the oars.–LatinProverb',
'If you’re offered as eat on a rocketship,don’t ask whats eat!Just get on.-SherylSandberg',
'Happiness is not something ready made.It comes from your own actions.–DalaiLama',
'When I let go of what I am,I become what I might be.–LaoTzu',
'Every thing has beauty,but not everyone can see.–Confucius',
'Few things can help an individual more than to place responsibility on him,and to let him know that you trust him.-BookerT.Washington',
'There is only one way to avoid criticism : do nothing,say nothing,and be nothing.–Aristotle',
'The best revenge is massive success.–FrankSinatra',
'Either you run the day,or the day runs you.–Jim Rohn',
'Winning isn’t everything,but wanting to win is.–VinceLombardi',
'Your time is limited,so don’ twaste it living someone else’s life.–SteveJobs',
'Life is what happens to you while you’re busy making other plans.–JohnLenno'
    ];
    
    function displayQuote(){
        //createanindexofarandom number
        //convertitintobetween0tolengthofquotes[]
        let index = Math.floor(Math.random()*quotes.length);
        //displaythequoteofthatindex
        let div= document.querySelector('#quote');
        let quote=`<divclass="card">
        <imgsrc="icons/favicon.png">
        <p>"${quotes[index]}"</p>
        <imgsrc="icons/favicon.png">
        </div>
        `;
        div.innerHTML=quote;
    }