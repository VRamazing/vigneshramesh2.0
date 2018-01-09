//Initialize Sidenav
    	$(".button-collapse").sideNav();
    	$(document).ready(function(){
	      $('.carousel').carousel();
	    });
	        
    	$(document).ready(function(){
		    $('.scrollspy').scrollSpy();
		});

    	//Close Sidenav on link click
    	$("ul#slide-out.side-nav > li > a").click(function(){
    		$('.button-collapse').sideNav('hide');    		
    	});
    	//Smooth Scroll
    	$(document).on('click', 'a#link', function(event){
		    event.preventDefault();

		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);
		});

		


		$( document ).ready(function() {
			var quotes = [{'name': 'Napoleon Hill', 'text': 'Whatever the mind of man can conceive and believe, it can achieve'}, {'name': 'Albert Einstein', 'text': 'Strive not to be a success, but rather to be of value'}, {'name': 'Robert Frost', 'text': 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference'}, {'name': 'Florence Nightingale', 'text': 'I attribute my success to this: I never gave or took any excuse'}, {'name': 'Wayne Gretzky', 'text': 'You miss 100% of the shots you don\'t take'}, {'name': 'Michael Jordan', 'text': 'I\'ve missed more than 9000 shots in my career, I\'ve lost almost 300 games, 26 times I\'ve been trusted to take the game winning shot and missed, I\'ve failed over and over and over again in my life, And that is why I succeed'}, {'name': 'Amelia Earhart', 'text': 'The most difficult thing is the decision to act, the rest is merely tenacity'}, {'name': 'Babe Ruth', 'text': 'Every strike brings me closer to the next home run'}, {'name': 'W Clement Stone', 'text': 'Definiteness of purpose is the starting point of all achievement'}, {'name': 'John Lennon', 'text': 'Life is what happens to you while you\'re busy making other plans'}, {'name': 'Earl Nightingale', 'text': 'We become what we think about'}, {'name': 'Mark Twain', 'text': 'Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails  Explore, Dream, Discover'}, {'name': 'Charles Swindoll', 'text': 'Life is 10% what happens to me and 90% of how I react to it'}, {'name': 'Alice Walker', 'text': 'The most common way people give up their power is by thinking they don\'t have any'}, {'name': 'Buddha', 'text': 'The mind is everything, What you think you become'}, {'name': 'Chinese Proverb', 'text': 'The best time to plant a tree was 20 years ago, The second best time is now'}, {'name': 'Socrates', 'text': 'An unexamined life is not worth living'}, {'name': 'Woody Allen', 'text': 'Eighty percent of success is showing up'}, {'name': 'Steve Jobs', 'text': 'Your time is limited, so don\'t waste it living someone else\'s life'}, {'name': 'Vince Lombardi', 'text': 'Winning isn\'t everything, but wanting to win is'}, {'name': 'Stephen Covey', 'text': 'I am not a product of my circumstances, I am a product of my decisions'}, {'name': 'Pablo Picasso', 'text': 'Every child is an artist,  The problem is how to remain an artist once he grows up'}, {'name': 'Christopher Columbus', 'text': 'You can never cross the ocean until you have the courage to lose sight of the shore'}, {'name': 'Maya Angelou', 'text': 'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel'}, {'name': 'Jim Rohn', 'text': 'Either you run the day, or the day runs you'}, {'name': 'Henry Ford', 'text': 'Whether you think you can or you think you can\'t, you\'re right'}, {'name': 'Mark Twain', 'text': 'The two most important days in your life are the day you are born and the day you find out why'}, {'name': 'Johann Wolfgang von Goethe', 'text': 'Whatever you can do, or dream you can, begin it,  Boldness has genius, power and magic in it'}, {'name': 'Frank Sinatra', 'text': 'The best revenge is massive success'}, {'name': 'Zig Ziglar', 'text': 'People often say that motivation doesn\'t last, Well, neither does bathing, That\'s why we recommend it daily'}, {'name': 'Anais Nin', 'text': "Life shrinks or expands in proportion to one's courage"}, {'name': 'Vincent Van Gogh', 'text': 'If you hear a voice within you say `you cannot paint`, then by all means paint and that voice will be silenced'}, {'name': 'Aristotle', 'text': 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing'}, {'name': 'Jesus', 'text': 'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you'}, {'name': 'Ralph Waldo Emerson', 'text': 'The only person you are destined to become is the person you decide to be'}, {'name': 'Henry David Thoreau', 'text': 'Go confidently in the direction of your dreams,  Live the life you have imagined'}, {'name': 'Erma Bombeck', 'text': 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me'}, {'name': 'Booker T', 'text': 'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him'}, {'name': ' Ancient Indian Proverb', 'text': 'Certain things catch your eye, but pursue only those that capture the heart'}, {'name': 'Theodore Roosevelt', 'text': 'Believe you can and you\'re halfway there'}, {'name': 'George Addair', 'text': 'Everything you\'ve ever wanted is on the other side of fear'}, {'name': 'Plato', 'text': 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light'}, {'name': 'Maimonides', 'text': 'Teach thy tongue to say, I do not know, and thous shalt progress'}, {'name': 'Arthur Ashe', 'text': 'Start where you are, Use what you have,  Do what you can'}, {'name': 'John Lennon', 'text': 'When I was 5 years old, my mother always told me that happiness was the key to life,  When I went to school, they asked me what I wanted to be when I grew up,  I wrote down ‘happy\',  They told me I didn\'t understand the assignment, and I told them they didn\'t understand life'}, {'name': 'Japanese Proverb', 'text': 'Fall seven times and stand up eight'}, {'name': 'Helen Keller', 'text': 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us'}, {'name': 'Confucius', 'text': 'Everything has beauty, but not everyone can see'}, {'name': 'Anne Frank', 'text': 'How wonderful it is that nobody need wait a single moment before starting to improve the world'}, {'name': 'Lao Tzu', 'text': 'When I let go of what I am, I become what I might be'}, {'name': 'Maya Angelou', 'text': 'Life is not measured by the number of breaths we take, but by the moments that take our breath away'}, {'name': 'Dalai Lama', 'text': 'Happiness is not something readymade,  It comes from your own actions'}, {'name': 'Sheryl Sandberg', 'text': 'If you\'re offered a seat on a rocket ship, don\'t ask what seat! Just get on'}, {'name': 'Aristotle', 'text': 'First, have a definite, clear practical ideal; a goal, an objective, Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods, Third, adjust all your means to that end'}, {'name': 'Latin Proverb', 'text': 'If the wind will not serve, take to the oars'}, {'name': 'Unknown', 'text': 'You can\'t fall if you don\'t climb,  But there\'s no joy in living your whole life on the ground'}, {'name': 'Marie Curie', 'text': 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained'}, {'name': 'Les Brown', 'text': 'Too many of us are not living our dreams because we are living our fears'}, {'name': 'Joshua J Marine', 'text': 'Challenges are what make life interesting and overcoming them is what makes life meaningful'}, {'name': 'Booker T Washington', 'text': 'If you want to lift yourself up, lift up someone else'}, {'name': 'Leonardo da Vinci', 'text': 'I have been impressed with the urgency of doing, Knowing is not enough, we must apply.Being willing is not enough, we must do'}, {'name': 'Jamie Paolinetti', 'text': 'Limitations live only in our minds,  But if we use our imaginations, our possibilities become limitless'}, {'name': 'Erica Jong', 'text': 'You take your life in your own hands, and what happens? A terrible thing, no one to blame'}, {'name': 'Benjamin Franklin', 'text': 'I didn\'t fail the test, I just found 100 ways to do it wrong'}, {'name': 'Bill Cosby', 'text': 'In order to succeed, your desire for success should be greater than your fear of failure'}, {'name': ' Albert Einstein', 'text': 'A person who never made a mistake never tried anything new'}, {'name': 'Chinese Proverb', 'text': 'The person who says it cannot be done should not interrupt the person who is doing it'}, {'name': 'Roger Staubach', 'text': 'There are no traffic jams along the extra mile'}, {'name': 'George Eliot', 'text': 'It is never too late to be what you might have been'}, {'name': 'Oprah Winfrey', 'text': 'You become what you believe'}, {'name': 'Oprah Winfrey', 'text': "If you look at what you have in life, you'll always have more, If you look at what you don't have in life, you'll never have enough"}, {'name': 'Dalai Lama', 'text': 'Remember that not getting what you want is sometimes a wonderful stroke of luck'}, {'name': 'Maya Angelou', 'text': 'You cant use up creativity,  The more you use, the more you have'}, {'name': 'Norman Vaughan', 'text': 'Dream big and dare to fail'}, {'name': 'Martin Luther King Jr', 'text': 'Our lives begin to end the day we become silent about things that matter'}, {'name': 'Teddy Roosevelt', 'text': 'Do what you can, where you are, with what you have'}, {'name': 'Tony Robbins', 'text': 'If you do what you\'ve always done, you\'ll get what you\'ve always gotten'}, {'name': 'Gloria Steinem', 'text': 'Dreaming, after all, is a form of planning'}, {'name': 'Mae Jemison', 'text': "It's your place in the world; it's your life, Go on and do all you can with it, and make it the life you want to live"}, {'name': 'Beverly Sills', 'text': 'You may be disappointed if you fail, but you are doomed if you don\'t try'}, {'name': 'Eleanor Roosevelt', 'text': 'Remember no one can make you feel inferior without your consent'}, {'name': 'Grandma Moses', 'text': 'Life is what we make it, always has been, always will be'}, {'name': 'Ayn Rand', 'text': 'The question isn\'t who is going to let me; it\'s who is going to stop me'}, {'name': 'Henry Ford', 'text': 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it'}, {'name': 'Abraham Lincoln', 'text': 'It\'s not the years in your life that count , It\'s the life in your years'}, {'name': 'Norman Vincent Peale', 'text': 'Change your thoughts and you change your world'}, {'name': 'Benjamin Franklin', 'text': 'Either write something worth reading or do something worth writing'}, {'name': 'Steve Jobs', 'text': 'The only way to do great work is to love what you do'}, {'name': 'Audrey Hepburn', 'text': 'Nothing is impossible, the word itself says, I am possible!'}, {'name': 'Zig Ziglar', 'text': 'If you can dream it, you can achieve it'},{'name': 'The Pursuit of Happyness', 'text': 'Don\'t ever let somebody tell you you can\'t do something, not even me. Alright? You dream, you gotta protect it. People can\'t do something themselves, they wanna tell you you can\'t do it. If you want something, go get it. Period.'}, {'name': 'Lord of the Rings: The Fellowship of the Ring', 'text': 'All we have to decide is what to do with the time that is given to us.'}, {'name': 'The Godfather', 'text': 'Great men are not born great, they grow great.'}, {'name': 'Good Will Hunting', 'text': '"Some people can\'t believe in themselves until someone else believes in them first.'}, {'name': 'Friday Night Lights', 'text': 'Being perfect is not about that scoreboard out there. It\'s not about winning. It\'s about you and your relationship with yourself, your family and your friends. Being perfect is about being able to look your friends in the eye and know that you didnt let them down because you told them the truth. And that truth is you did everything you could. There wasnt one more thing you could\'ve done. Can you live in that moment as best you can, with clear eyes, and love in your heart, with joy in your heart? If you can do that gentleman – you\'re perfect!'}, {'name': 'Finding Nemo', 'text': 'Just keep swimming. Just keep swimming. Just keep swimming, swimming, swimming. What do we do? We swim, swim.'}, {'name': 'Ferris Bueller\'s Day Off', 'text': 'Life moves pretty fast. If you don\'t stop and look around once in a while, you could miss it.'}, {'name': 'Gladiator', 'text': 'What we do in life echoes in eternity.'}, {'name': 'Braveheart', 'text': 'Every man dies, but not every man really lives.'}, {'name': 'Cast Away', 'text': 'I know what I have to do now. I\'ve got to keep breathing because tomorrow the sun will rise. Who knows what the tide could bring?'}, {'name': 'Rocky Balboa', 'text': 'Nobody is gonna hit as hard as life, but it ain\'t how hard you can hit. It\'s how hard you can get hit and keep moving forward. It\'s how much you can take, and keep moving forward. That\'s how winning is done.'}, {'name': 'Finding Forrester', 'text': 'Someone I once knew wrote that we walk away from our dreams afraid that we may fail or worse yet, afraid we may succeed.'}, {'name': 'The Shawshank Redemption', 'text': 'Get busy livin\', or get busy dyin\'.'}, {'name': 'Mean Girls', 'text': 'Calling someone fat doesn\'t make you any skinnier. Calling someone stupid doesnt make you any smarter. All you can do in life is try and solve the problem in front of you.'}, {'name': 'The Sandlot', 'text': 'Kid, there are heroes and there are legends. Heroes get remembered, but legends never die. Follow your heart, kid, and you\'ll never go wrong.'}, {'name': 'Freedom Writer', 'text': 'I don\'t want excuses. I know what you\'re up against. We\'re all of us up against something. So you better make up your mind, because until you have the balls to look me straight in the eye and tell me this is all you deserve, I am not letting you fail. Even if that means coming to your house every night until you finish the work. I see who you are. Do you understand me? I can see you. And you are not failing.'}, {'name': 'Harry Potter and the Chamber of Secrets', 'text': 'It is not our abilities that show what we truly are. It is our choices.'}, {'name': 'Mulan', 'text': 'The flower that blooms in adversity is the most rare and beautiful of all.'}, {'name': 'The Bucket List', 'text': 'You know, the ancient Egyptians had a beautiful belief about death. When their souls got to the entrance to heaven, the guards asked two questions. Their answers determined whether they were able to enter or not. Have you found joy in your life?\' Has your life brought joy to others?\''},{'name': 'Peaceful Warrior', 'text': 'The accident is your training. Life is a choice. You can choose to be a victim or anything else you\'d like to be.'}, {'name': 'It\'s a Wonderful Life', 'text': 'Strange, isn\'t it? Each man\'s life touches so many other lives. When he isn\'t around he leaves an awful hole, doesn\'t he?'}, {'name': 'Rudy', 'text': '"In this life time, you don\'t have to prove nothing to nobody, except yourself. And after what you\'ve gone through,if you haven\'t done that by now, it ain\'t gonna never happen."'}, {'name': 'The Lion King', 'text': 'Oh yes, the past can hurt. But you can either run from it, or learn from it.'}, {'name': 'The Empire Strikes Back', 'text': 'Do, or do not. There is no "try".'},{'name': 'Ferris Bueller\'s Day Off', 'text': 'Life moves pretty fast. If you don\'t stop and look around once in a while, you could miss it.'}, {'name': 'Gladiator', 'text': 'What we do in life echoes in eternity.'}, {'name': 'Braveheart', 'text': 'Every man dies, but not every man really lives.'},{'name': 'Harry Potter and the Chamber of Secrets', 'text': '"It is not our abilities that show what we truly are. It is our choices."'}, {'name': 'Mulan', 'text': '"The flower that blooms in adversity is the most rare and beautiful of all."'}, {'name': 'The Bucket List', 'text': 'You know, the ancient Egyptians had a beautiful belief about death. When their souls got to the entrance to heaven, the guards asked two questions. Their answers determined whether they were able to enter or not. Have you found joy in your life?\' Has your life brought joy to others?\''}, {'name': 'Peaceful Warrior', 'text': '"The accident is your training. Life is a choice. You can choose to be a victim or anything else you\'d like to be."'}, {'name': 'It\'s a Wonderful Life', 'text': 'Strange, isn\'t it? Each man\'s life touches so many other lives. When he isn\'t around he leaves an awful hole, doesn\'t he?'},{'name': 'The Empire Strikes Back', 'text': 'Do, or do not. There is no try.'}];
			var idx = Math.floor(Math.random() * quotes.length);
			 $("#quote").text(quotes[idx].text + " ~ " + quotes[idx].name);
		    console.log( "ready!" );
		});

		

		