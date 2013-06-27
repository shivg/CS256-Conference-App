/*global define */
define([], function () {
    'use strict';

    var exports = {};

	var speakers = null;

	function sortSpeakers() {
		if (speakers && (speakers instanceof Array))
			speakers.sort(function(a, b){
				var nameA=a.last_name.toLowerCase(), 
				    nameB=b.last_name.toLowerCase();
				if (nameA < nameB) //sort string ascending
					return -1 
				if (nameA > nameB)
					return 1
				return 0 //default return value (no sorting)
			});
	}

/*
<section class="speaker">
    <img class="avatar" src="../images/speakers/cwilso.192.jpg">
    <section class="speaker-info">
        <h2 class="speaker-name">Chris Wilson</h2>
        <section class="talks">
            <section class="chrome track">
                <h2></h2>
                <section class="talk">
                    <h4 class="bold">Rocking Out with Web MIDI</h4>
                    <p>3:45PM Wednesday, Room 1</p>
                </section>
            </section>
            <section class="android track">
                <h2></h2>
                <section class="talk">
                    <h4 class="bold">Android's Audio Stack</h4>
                    <p>12:00PM Wednesday, Room 5</p>
                </section>
            </section>
        </section>
    </section>
</section>
*/


	function generateSpeakerHTML( speaker ) {
		var root = document.createElement("section");
		root.className = "speaker";
		root.id = speaker.speaker_id;

		var thumbnail = new Image();
		thumbnail.src = speaker.thumbnail_url;
		thumbnail.className = "speaker-thumbnail";

		root.appendChild(thumbnail);

		var speakerInfo = document.createElement("section");
		speakerInfo.className = "speaker-info";

		var speakerName = document.createElement("h2");
		speakerName.className = "speaker-name";
		speakerName.innerText = speaker.display_name;

		var talks = document.createElement("section");
		talks.className = "speaker-talks";

		var talkTitle = document.createElement("h4");
		talkTitle.innerText = "Creating Great Lorem Ipsum Texts";
		talkTitle.className = "talk-title";

		var talkTime = document.createElement("div");
		talkTime.innerText = "11:00AM Thursday";
		talkTime.className = "talk-time";

		talks.appendChild(talkTitle);
		talks.appendChild(talkTime);

		speakerInfo.appendChild(speakerName);
		root.appendChild(speakerInfo);
		root.appendChild(talks);

		return root;
	}

	function regenerateSpeakers() {
		var insert = document.getElementById("insert");
		while (insert.hasChildNodes())
			insert.removeChild(insert.childNodes[0]);

		var placeholder = document.createElement("section");
		for (var i=0; i<speakers.length;i++)
			placeholder.appendChild(generateSpeakerHTML(speakers[i]));

		insert.appendChild(placeholder);
	}

	// TEMPORARY code - TODO: replace with JSON loading
// via var jsonResponse = JSON.parse(req.responseText);

	speakers = [
	  {
	   "bio": "Francesco is an Engineering Manager on the Android team responsible for device cloud messaging.",
	   "first_name": "Francesco",
	   "last_name": "Nerieri",
	   "display_name": "Francesco Nerieri",
	   "plusone_url": "https://plus.google.com/u/0/104524825852741167674/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nero.jpg",
	   "user_id": "gooio2012/2176",
	   "speaker_id": "gooio2012/100//gooio2012/2176"
	  },
	  {
	   "first_name": "Reto",
	   "last_name": "Meier",
	   "user_id": "gooio2012/2177",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/retomeier.jpg",
	   "display_name": "Reto Meier",
	   "speaker_id": "gooio2012/101//gooio2012/2177"
	  },
	  {
	   "bio": "Tim Bray is a Developer Advocate at Google, where his work is currently focused on the Android platform.  A software developer and entrepreneur, he was a co-founder of Open Text Corporation (Nasdaq:OTEX), author of one of the first Web search engines, and co-inventor of XML.  He is a popular blogger (http://www.tbray.org/ongoing/) and Twitterer (@timbray).",
	   "first_name": "Tim",
	   "last_name": "Bray",
	   "display_name": "Tim Bray",
	   "plusone_url": "https://plus.google.com/107606703558161507946/about",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2072",
	   "speaker_id": "gooio2012/102//gooio2012/2072"
	  },
	  {
	   "bio": "Jeff is a software engineer on the Android Framework team at Google.  He enjoys hacking on Android and Linux in his free time, and is passionate about open-source software.",
	   "first_name": "Jeff",
	   "last_name": "Sharkey",
	   "display_name": "Jeff Sharkey",
	   "plusone_url": "https://plus.google.com/112333815159468020407/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jsharkey.jpg",
	   "user_id": "gooio2012/2122",
	   "speaker_id": "gooio2012/103//gooio2012/2122"
	  },
	  {
	   "bio": "Xavier is the tech-lead for the Android SDK and Developer Tools. He joined Google in 2007 and holds a MS in Computer Science from EFREI, France.",
	   "first_name": "Xavier",
	   "last_name": "Ducrohet",
	   "display_name": "Xavier Ducrohet",
	   "plusone_url": "https://plus.google.com/u/0/109385828142935151413",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/xav.jpg",
	   "user_id": "gooio2012/2178",
	   "speaker_id": "gooio2012/104//gooio2012/2178"
	  },
	  {
	   "bio": "Tor Norbye is an engineer on the Android SDK team working on visual tools for Android development. Prior to Google he worked on tools for 14 years at Sun Microsystems.",
	   "first_name": "Tor",
	   "last_name": "Norbye",
	   "display_name": "Tor Norbye",
	   "plusone_url": "https://plus.google.com/u/0/116539451797396019960/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/tnorbye.jpg",
	   "user_id": "gooio2012/2186",
	   "speaker_id": "gooio2012/104//gooio2012/2186"
	  },
	  {
	   "first_name": "Chet",
	   "last_name": "Haase",
	   "user_id": "gooio2012/2179",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/chet.jpg",
	   "display_name": "Chet Haase",
	   "speaker_id": "gooio2012/105//gooio2012/2179"
	  },
	  {
	   "first_name": "Romain",
	   "last_name": "Guy",
	   "user_id": "gooio2012/2180",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/romainguy.jpg",
	   "display_name": "Romain Guy",
	   "speaker_id": "gooio2012/105//gooio2012/2180"
	  },
	  {
	   "bio": "Bruno is a Developer Programs Engineer at Google. Based in Sao Paulo, Brazil, he works closely with developers in order to grow and engage the online community around Google developer products, with special emphasis on fostering the involvement of Brazilian developers. His focus areas are Android and Social.",
	   "first_name": "Bruno",
	   "last_name": "Oliveira",
	   "display_name": "Bruno Oliveira",
	   "plusone_url": "https://plus.google.com/102451193315916178828/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/btco.jpg",
	   "user_id": "gooio2012/2021",
	   "speaker_id": "gooio2012/106//gooio2012/2021"
	  },
	  {
	   "first_name": "Adam",
	   "last_name": "Powell",
	   "user_id": "gooio2012/2184",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/adamp.jpg",
	   "display_name": "Adam Powell",
	   "speaker_id": "gooio2012/106//gooio2012/2184"
	  },
	  {
	   "bio": "Jon is a security engineer on the Android security team.",
	   "first_name": "Jon",
	   "last_name": "Larimer",
	   "display_name": "Jon Larimer",
	   "plusone_url": "https://plus.google.com/113798188908690125049/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jlarimer.jpg",
	   "user_id": "gooio2012/2145",
	   "speaker_id": "gooio2012/107//gooio2012/2145"
	  },
	  {
	   "bio": "Kenny is a software engineer on the Android framework and security teams.",
	   "first_name": "Kenny",
	   "last_name": "Root",
	   "display_name": "Kenny Root",
	   "plusone_url": "https://plus.google.com/100226390734369553200/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kroot.jpg",
	   "user_id": "gooio2012/2148",
	   "speaker_id": "gooio2012/107//gooio2012/2148"
	  },
	  {
	   "bio": "Ankur is an Android Developer Advocate. He is a technology enthusiast and passionate about Android. Ankur's mission is to assist developers in building high quality, world class Android phone/tablet applications and make them available on Google Play.",
	   "first_name": "Ankur",
	   "last_name": "Kotwal",
	   "display_name": "Ankur Kotwal",
	   "plusone_url": "http://profiles.google.com/ankurkotwal",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kotwal.jpg",
	   "user_id": "gooio2012/2067",
	   "speaker_id": "gooio2012/108//gooio2012/2067"
	  },
	  {
	   "bio": "Tony is a Developer Advocate for Android.  His goal is to work with developers globally to build great Android applications using various Google technologies and make them available in Google Play.",
	   "first_name": "Tony",
	   "last_name": "Chan",
	   "display_name": "Tony Chan",
	   "plusone_url": "https://plus.google.com/100444819261782786795/about",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2068",
	   "speaker_id": "gooio2012/108//gooio2012/2068"
	  },
	  {
	   "bio": "Dan Galpin is an Android Developer Advocate focused on Games.  He lectures on the Android Framework, NDK development, and Android Market developer-facing features.",
	   "first_name": "Dan",
	   "last_name": "Galpin",
	   "display_name": "Dan Galpin",
	   "plusone_url": "https://plus.google.com/105593270217665985575/",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2027",
	   "speaker_id": "gooio2012/110//gooio2012/2027"
	  },
	  {
	   "first_name": "Ian",
	   "last_name": "Lewis",
	   "user_id": "gooio2012/2299",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Ian Lewis",
	   "speaker_id": "gooio2012/110//gooio2012/2299"
	  },
	  {
	   "bio": "Jeff is a Developer Programs Engineer based in NYC. He currently helps developers navigate the ins and outs of the YouTube APIs. Before joining Google in 2007, Jeff worked in finance and publishing.",
	   "first_name": "Jeffrey",
	   "last_name": "Posnick",
	   "display_name": "Jeffrey Posnick",
	   "plusone_url": "https://plus.google.com/117780118136555864520",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jeffy.jpg",
	   "user_id": "gooio2012/2056",
	   "speaker_id": "gooio2012/1101//gooio2012/2056"
	  },
	  {
	   "bio": "Eric joined Google in 2007 and is the lead developer of YouTube's Embeddable Upload Widget.  He is a graduate of Carnegie Mellon University.",
	   "first_name": "Eric",
	   "last_name": "Lundberg",
	   "display_name": "Eric Lundberg",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ericlundberg.jpg",
	   "user_id": "gooio2012/2121",
	   "speaker_id": "gooio2012/1101//gooio2012/2121"
	  },
	  {
	   "bio": "JJ is a developer advocate for YouTube APIs. He blogs at jjinux.blogspot.com on topics such as Python, Ruby, Linux, open source software, the Web, and lesser-known programming languages.",
	   "first_name": "Shannon -jj",
	   "last_name": "Behrens",
	   "display_name": "Shannon -jj Behrens",
	   "plusone_url": "https://plus.google.com/115478738847874567952/posts?hl=en",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jjinux.jpg",
	   "user_id": "gooio2012/2013",
	   "speaker_id": "gooio2012/1102//gooio2012/2013"
	  },
	  {
	   "bio": "Jarek is a YouTube Developer Advocate and his focus is helping partners implement amazing applications using YouTube APIs. He is a graduate of Carnegie Mellon University and The University of Memphis.",
	   "first_name": "Jarek",
	   "last_name": "Wilkiewicz",
	   "display_name": "Jarek Wilkiewicz",
	   "plusone_url": "https://plus.google.com/115372405214595182619/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jarekw.jpg",
	   "user_id": "gooio2012/2015",
	   "speaker_id": "gooio2012/1102//gooio2012/2015"
	  },
	  {
	   "bio": "Andrey Doronichev leads mobile product efforts for YouTube. His responsibilities include global oversight of YouTube's mobile website, client implementations on Android and other key mobile and tablet platforms.",
	   "first_name": "Andrey",
	   "last_name": "Doronichev",
	   "display_name": "Andrey Doronichev",
	   "plusone_url": "https://plus.google.com/u/0/101537723389546832542/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dav.jpg",
	   "user_id": "gooio2012/2285",
	   "speaker_id": "gooio2012/1102//gooio2012/2285"
	  },
	  {
	   "bio": "Danny is a Developer Programs Engineer at Google working on the Commerce team, particularly with the Shopping APIs. He regularly contributes to the GData client libraries.",
	   "first_name": "Danny",
	   "last_name": "Hermes",
	   "display_name": "Danny Hermes",
	   "plusone_url": "https://plus.google.com/114760865724135687241",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dhermes.jpg",
	   "user_id": "gooio2012/2115",
	   "speaker_id": "gooio2012/1103//gooio2012/2115"
	  },
	  {
	   "bio": "Greg is a fearless web warrior, fighting for browser and website progress. While training at the University of Illinois in Urbana-Champaign, he published articles with the Opera Web Standards Curriculum. Subsequently, he went on to battle alongside many different web companies, including Amazon, Yahoo, and Google. His current alliance is with YouTube, where he spearheads the movement for HTML5 video capabilities.",
	   "first_name": "Greg",
	   "last_name": "Schechter",
	   "display_name": "Greg Schechter",
	   "plusone_url": "https://plus.google.com/109404491328800973695/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/schechter.jpg",
	   "user_id": "gooio2012/2055",
	   "speaker_id": "gooio2012/1104//gooio2012/2055"
	  },
	  {
	   "bio": "Zoltan is a software engineer on the YouTube Mobile team, currently based in Tokyo, working on YouTube's mobile website for feature phones, smartphones and tablets.",
	   "first_name": "Zoltan",
	   "last_name": "Szego",
	   "display_name": "Zoltan Szego",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/zszego.jpg",
	   "user_id": "gooio2012/2149",
	   "speaker_id": "gooio2012/1104//gooio2012/2149"
	  },
	  {
	   "first_name": "Kenneth",
	   "last_name": "Lui",
	   "user_id": "gooio2012/2181",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kennethlui.jpg",
	   "display_name": "Kenneth Lui",
	   "speaker_id": "gooio2012/111//gooio2012/2181"
	  },
	  {
	   "bio": "Chrix (with an 'x'!) is a Product Manager at Google focused on Mobile Display Ads, where he is responsible for ads quality and pricing on the AdMob network and the mobile Google Display Network (GDN). Previously, he was Product Manager for Google Reader, as well as Google mobile search ads and Google Analytics for mobile. Chrix is a graduate of Harvard University, and has also worked at Microsoft.",
	   "first_name": "Chrix",
	   "last_name": "Finne",
	   "user_id": "gooio2012/2354",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/chrix.jpg",
	   "display_name": "Chrix Finne",
	   "speaker_id": "gooio2012/111//gooio2012/2354"
	  },
	  {
	   "bio": "Rachel is a senior interaction designer on the Android team. She's a frequent contributor to the Android Design guide and co-author of Android's design principles. Prior to joining Google, she worked at TiVo, AOL, IBM, and several startups.",
	   "first_name": "Rachel",
	   "last_name": "Garb",
	   "user_id": "gooio2012/2349",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rachelg.jpg",
	   "display_name": "Rachel Garb",
	   "speaker_id": "gooio2012/112//gooio2012/2349"
	  },
	  {
	   "bio": "Jens is a senior interaction designer on the Android team, focused on system user interfaces and the Android Design guide. Prior to joining Google, he designed consumer experiences for Motorola.",
	   "first_name": "Jens",
	   "last_name": "Nagel",
	   "user_id": "gooio2012/2350",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jnagel.jpg",
	   "display_name": "Jens Nagel",
	   "speaker_id": "gooio2012/112//gooio2012/2350"
	  },
	  {
	   "bio": "Nate is a Visual Design Lead on the Android team. He has worked on many aspects of Android visual design including application framework, Gmail, People, system UI, and the Android Design guide. Prior to Android, he spent his time weaving baskets.",
	   "first_name": "Nate",
	   "last_name": "Streu",
	   "user_id": "gooio2012/2351",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nstreu.jpg",
	   "display_name": "Nate Streu",
	   "speaker_id": "gooio2012/112//gooio2012/2351"
	  },
	  {
	   "bio": "As Director of User Experience for Android, Matías Duarte leads the team responsible for designing all aspects of the software and visual experience across the Android platform and core services. His overriding passion is to make computers delightful.",
	   "first_name": "Matias",
	   "last_name": "Duarte",
	   "user_id": "gooio2012/2352",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/matiasduarte.jpg",
	   "display_name": "Matias Duarte",
	   "speaker_id": "gooio2012/112//gooio2012/2352"
	  },
	  {
	   "bio": "Patrick is Marketing Director for Google Play. His\nprimary role is to oversee and develop the overall marketing strategy for Play Store, drive consumer\nengagement and develop the Google Play brand.",
	   "first_name": "Patrick",
	   "last_name": "Mork",
	   "display_name": "Patrick Mork",
	   "plusone_url": "https://plus.google.com/112696712811696763913/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/madmork.jpg",
	   "user_id": "gooio2012/2152",
	   "speaker_id": "gooio2012/113//gooio2012/2152"
	  },
	  {
	   "bio": "Kushagra leads Apps and games marketing for Google Play. He is responsible to tell the story of amazing apps and games on Google Play to consumers, get them excited, and drive more engagement.",
	   "first_name": "Kushagra",
	   "last_name": "Shrivastava",
	   "display_name": "Kushagra Shrivastava",
	   "plusone_url": "https://plus.google.com/103253417842130417839/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kushagra.jpg",
	   "user_id": "gooio2012/2153",
	   "speaker_id": "gooio2012/113//gooio2012/2153"
	  },
	  {
	   "bio": "Richard is a staff user interface designer on the Android team, focused on communication applications. Prior to joining Google, he designed consumer experiences for TiVo, Sirius, Dell and AOL.",
	   "first_name": "Richard",
	   "last_name": "Fulcher",
	   "display_name": "Richard Fulcher",
	   "plusone_url": "https://plus.google.com/u/0/104617628550655857095/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rfulcher.jpg",
	   "user_id": "gooio2012/2161",
	   "speaker_id": "gooio2012/114//gooio2012/2161"
	  },
	  {
	   "first_name": "Richard",
	   "last_name": "Ngo",
	   "user_id": "gooio2012/2355",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/richardngo.jpg",
	   "display_name": "Richard Ngo",
	   "speaker_id": "gooio2012/115//gooio2012/2355"
	  },
	  {
	   "bio": "Daniel is a Tech Lead on the Android Core Apps team, responsible for the People and Phone applications. He is obsessed with beautiful and responsive touch interfaces. Prior to joining Google, he studied at the Technical University of Munich and worked on making cars safer at Audi.",
	   "first_name": "Daniel",
	   "last_name": "Lehmann",
	   "user_id": "gooio2012/2356",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/lehmannd.jpg",
	   "display_name": "Daniel Lehmann",
	   "speaker_id": "gooio2012/115//gooio2012/2356"
	  },
	  {
	   "bio": "Dave Burke is an Engineering Director on the Android team responsible for platform software. Prior to moving to California, Dave was an engineering site lead for Google UK. Dave holds a PhD in EE from University College Dublin, Ireland.",
	   "first_name": "Dave",
	   "last_name": "Burke",
	   "display_name": "Dave Burke",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/daveburke.jpg",
	   "user_id": "gooio2012/2164",
	   "speaker_id": "gooio2012/117//gooio2012/2164"
	  },
	  {
	   "bio": "Nick Mihailovski is a Sr. Developer Programs Engineer at Google and oversees Developer Relations for Google Analytics. He has a passion for bridging the gap between business requirements and technical capabilities and works with enterprise clients to develop innovative measurement solutions.",
	   "first_name": "Nick",
	   "last_name": "Mihailovski",
	   "display_name": "Nick Mihailovski",
	   "plusone_url": "https://plus.google.com/112976464453422312311/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nm.jpg",
	   "user_id": "gooio2012/2094",
	   "speaker_id": "gooio2012/118//gooio2012/2094"
	  },
	  {
	   "bio": "Mike is a Software Engineer, and leads the development of the data processing pipelines for processing social ROI and app data in Google Analytics. Prior to Google, he worked on Eclipse based development environments and data modeling tools at IBM. He enjoys volleyball, indoor rock climbing, and Stanford women's basketball games.",
	   "first_name": "Mike",
	   "last_name": "Kwong",
	   "display_name": "Mike Kwong",
	   "plusone_url": "https://plus.google.com/u/0/117256589511208738017",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2102",
	   "speaker_id": "gooio2012/118//gooio2012/2102"
	  },
	  {
	   "bio": "Neil is Tech Lead for the Google Mobile Analytics SDK team.  He joined Google in 2007 and works in the Irvine office. Neil has been doing development for handhelds since 1993.",
	   "first_name": "Neil",
	   "last_name": "Rhodes",
	   "display_name": "Neil Rhodes",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nrhodes.jpg",
	   "user_id": "gooio2012/2233",
	   "speaker_id": "gooio2012/118//gooio2012/2233"
	  },
	  {
	   "bio": "Ross is a software engineer on the YouTube Mobile team. He is working on bringing native YouTube playback to Android app developers. Prior to joining Google, he was involved in runtime systems research for multi-core architectures.",
	   "first_name": "Ross",
	   "last_name": "McIlroy",
	   "display_name": "Ross McIlroy",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rmcilroy.jpg",
	   "user_id": "gooio2012/2154",
	   "speaker_id": "gooio2012/120//gooio2012/2154"
	  },
	  {
	   "bio": "Anton Hansson is a software engineering working on YouTube Mobile. He is currently working on creating a beautiful YouTube Player API experience for Android app developers. He holds a MSc from Lund University.",
	   "first_name": "Anton",
	   "last_name": "Hansson",
	   "display_name": "Anton Hansson",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/hansson.jpg",
	   "user_id": "gooio2012/2190",
	   "speaker_id": "gooio2012/120//gooio2012/2190"
	  },
	  {
	   "bio": "Brian Fitzpatrick started Google's Chicago engineering office in 2005. An open source contributor for over 13 years, Brian is the engineering manager for several Google products, an author, and a resident of Chicago",
	   "first_name": "Brian",
	   "last_name": "Fitzpatrick",
	   "display_name": "Brian Fitzpatrick",
	   "plusone_url": "http://www.red-bean.com/fitz/+",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/fitz.jpg",
	   "user_id": "gooio2012/2113",
	   "speaker_id": "gooio2012/1200//gooio2012/2113"
	  },
	  {
	   "bio": "Ben is a co-founder of Subversion and Google Code. He has given numerous talks about the social challenges of software development, and collects a ridiculous number of geeky hobbies.",
	   "first_name": "Ben",
	   "last_name": "Collins-Sussman",
	   "display_name": "Ben Collins-Sussman",
	   "plusone_url": "https://plus.sandbox.google.com/u/0/113939332173985992126/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/sussman.jpg",
	   "user_id": "gooio2012/2114",
	   "speaker_id": "gooio2012/1200//gooio2012/2114"
	  },
	  {
	   "bio": "From doing real-time special effects at SportVision, to co-creating SPDY at Google, Roberto has always had a passion for making things faster, better, and more reliable. He hopes to continue doing just that.",
	   "first_name": "Roberto",
	   "last_name": "Peon",
	   "display_name": "Roberto Peon",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/fenix.jpg",
	   "user_id": "gooio2012/2163",
	   "speaker_id": "gooio2012/1201//gooio2012/2163"
	  },
	  {
	   "bio": "Leah Busque is the founder and CEO of TaskRabbit, an online and mobile marketplace where people can go to outsource small jobs and Tasks to people in their neighborhood. Since its founding in 2008, Leah has grown TaskRabbit to more than 50 employees and expanded the service to 9 US cities. Prior to founding TaskRabbit, Leah was a software engineer at IBM.",
	   "first_name": "Leah",
	   "last_name": "Busque",
	   "user_id": "gooio2012/2358",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/Leah_Busque_Headshot.jpg",
	   "display_name": "Leah Busque",
	   "speaker_id": "gooio2012/1202//gooio2012/2358"
	  },
	  {
	   "bio": "Sepi is responsible for global partnerships & sponsorships&events for Women 2.0. Prior to Women 2.0, she was involved in numerous up & coming tech companies. An advisor to early stage startups.Launched her first app The Date Saver Platinum in 2010, a clean tech mobile App. Tweet her @SepidehN",
	   "first_name": "Sepideh",
	   "last_name": "Nasiri",
	   "user_id": "gooio2012/2359",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/Sepi Headshot2012.png",
	   "display_name": "Sepideh Nasiri",
	   "speaker_id": "gooio2012/1202//gooio2012/2359"
	  },
	  {
	   "bio": "Jess Lee is Co-Founder and CEO of Polyvore.  Polyvore is the web's largest fashion community site, with over 15 million monthly unique visitors.  Prior to Polyvore, Jess was a product manager for Google Maps. Jess has a degree in Computer Science from Stanford University.",
	   "first_name": "Jess",
	   "last_name": "Lee",
	   "user_id": "gooio2012/2360",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/Jess Lee headshot.jpg",
	   "display_name": "Jess Lee",
	   "speaker_id": "gooio2012/1202//gooio2012/2360"
	  },
	  {
	   "bio": "Tracy is currently a backend software engineer at Pinterest. She was previously at Quora as one of the early engineers there, and has also held positions at Facebook and Google. Tracy has an M.S. in computer science and B.S. in electrical engineering from Stanford University.",
	   "first_name": "Tracy",
	   "last_name": "Chou",
	   "user_id": "gooio2012/2361",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/Tracy_Chou.jpeg",
	   "display_name": "Tracy Chou",
	   "speaker_id": "gooio2012/1202//gooio2012/2361"
	  },
	  {
	   "first_name": "Margaret",
	   "last_name": "Wallace",
	   "user_id": "gooio2012/2362",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/MargaretWallace.jpeg",
	   "display_name": "Margaret Wallace",
	   "speaker_id": "gooio2012/1202//gooio2012/2362"
	  },
	  {
	   "bio": "Jeff Bates is Open Source IT Program Manager for Google's Corporate Engineering.  Previously, he co-founded Slashdot.org, and ran SourceForge.net and associated media properties.",
	   "first_name": "Jeff",
	   "last_name": "Bates",
	   "display_name": "Jeff Bates",
	   "plusone_url": "https://plus.google.com/u/0/105107878790528682279/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/batesj.jpg",
	   "user_id": "gooio2012/2241",
	   "speaker_id": "gooio2012/1203//gooio2012/2241"
	  },
	  {
	   "bio": "Alex Faaborg is a designer on the Android team.  Prior to joining Google he was a Principal Designer on Firefox at Mozilla, and he is a graduate of the MIT Media Laboratory.",
	   "first_name": "Alex",
	   "last_name": "Faaborg",
	   "display_name": "Alex Faaborg",
	   "plusone_url": "https://plus.google.com/u/0/102905316931749515082",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/faaborg.jpg",
	   "user_id": "gooio2012/2126",
	   "speaker_id": "gooio2012/1204//gooio2012/2126"
	  },
	  {
	   "bio": "Christian Robertson leads the Android visual design group. He is also the designer of the Roboto type family.",
	   "first_name": "Christian",
	   "last_name": "Robertson",
	   "display_name": "Christian Robertson",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/robertsonc.jpg",
	   "user_id": "gooio2012/2183",
	   "speaker_id": "gooio2012/1204//gooio2012/2183"
	  },
	  {
	   "bio": "Patrick Meenan is an Engineer at Google working on tools for measuring web performance as part of the \"Make The Web Faster\" team.  He also created and runs the WebPagetest measurement service.",
	   "first_name": "Patrick",
	   "last_name": "Meenan",
	   "display_name": "Patrick Meenan",
	   "plusone_url": "https://plus.google.com/u/0/104759401447358500786/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/pmeenan.jpg",
	   "user_id": "gooio2012/2106",
	   "speaker_id": "gooio2012/1205//gooio2012/2106"
	  },
	  {
	   "bio": "Rebecca Moore is the engineering manager for Google Earth Engine. She also founded and manages the Google Earth Outreach program. Rebecca personally used Google Earth to stop the logging of 1,000 acres of redwoods in her community.",
	   "first_name": "Rebecca",
	   "last_name": "Moore",
	   "display_name": "Rebecca Moore",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rmoore.jpg",
	   "user_id": "gooio2012/2128",
	   "speaker_id": "gooio2012/1206//gooio2012/2128"
	  },
	  {
	   "bio": "Dave Thau is Senior Developer Advocate for Google Earth Engine, Google's geo analysis platform.  He's spent the last decade helping scientists and non-profit organizations integrate their methodologies into collaborative, distributed systems.",
	   "first_name": "Dave",
	   "last_name": "Thau",
	   "display_name": "Dave Thau",
	   "plusone_url": "https://plus.google.com/u/0/101123647013166665758",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/thau.jpg",
	   "user_id": "gooio2012/2129",
	   "speaker_id": "gooio2012/1206//gooio2012/2129"
	  },
	  {
	   "user_id": "gooio2012/2381",
	   "first_name": "C. Andrew",
	   "last_name": "Warren",
	   "display_name": "C. Andrew Warren",
	   "speaker_id": "gooio2012/1208//gooio2012/2381"
	  },
	  {
	   "user_id": "gooio2012/2382",
	   "first_name": "Manish",
	   "last_name": "Bhargava",
	   "display_name": "Manish Bhargava",
	   "speaker_id": "gooio2012/1208//gooio2012/2382"
	  },
	  {
	   "user_id": "gooio2012/2363",
	   "first_name": "Shawn",
	   "last_name": "Simister",
	   "display_name": "Shawn Simister",
	   "speaker_id": "gooio2012/1209//gooio2012/2363"
	  },
	  {
	   "bio": "Yaniv Inbar is the Technical Lead for the Google API Client Team, and lead engineer for the Android client library for Google APIs. He has 13 years software industry experience, including 6 at Google.",
	   "first_name": "Yaniv",
	   "last_name": "Inbar",
	   "display_name": "Yaniv Inbar",
	   "plusone_url": "https://plus.google.com/115186671970087006570",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/yanivi.jpg",
	   "user_id": "gooio2012/2162",
	   "speaker_id": "gooio2012/121//gooio2012/2162"
	  },
	  {
	   "bio": "Nicolas Roard is a software engineer on the Android team, working on making the Browser and the webview smooth and fast.",
	   "first_name": "Nicolas",
	   "last_name": "Roard",
	   "display_name": "Nicolas Roard",
	   "plusone_url": "https://plus.sandbox.google.com/u/0/111325331580310420251/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nicolasroard.jpg",
	   "user_id": "gooio2012/2191",
	   "speaker_id": "gooio2012/122//gooio2012/2191"
	  },
	  {
	   "bio": "Chris is the Engineering Director for Google Play. His team builds the software that brings your digital content to your devices.",
	   "first_name": "Chris",
	   "last_name": "Yerga",
	   "display_name": "Chris Yerga",
	   "plusone_url": "https://plus.google.com/u/0/101718177667617819833/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/yerga.jpg",
	   "user_id": "gooio2012/2192",
	   "speaker_id": "gooio2012/123//gooio2012/2192"
	  },
	  {
	   "bio": "Ellie Powers is a product manager on Google Play. She's focused on giving Android developers everything they need to run successful businesses.",
	   "first_name": "Ellie",
	   "last_name": "Powers",
	   "display_name": "Ellie Powers",
	   "plusone_url": "https://plus.google.com/u/0/100189531984607939401/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/epowers.jpg",
	   "user_id": "gooio2012/2193",
	   "speaker_id": "gooio2012/123//gooio2012/2193"
	  },
	  {
	   "bio": "Robert is the Product Manager for Android Beam and a number of other Android projects. Since joining Google he was worked on a number of mobile projects including mobile search.",
	   "first_name": "Robert",
	   "last_name": "Hamilton",
	   "display_name": "Robert Hamilton",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rhamilton.jpg",
	   "user_id": "gooio2012/2107",
	   "speaker_id": "gooio2012/125//gooio2012/2107"
	  },
	  {
	   "bio": "Martijn is a Software Engineer in the Android NFC team, working on bringing new and exciting NFC features to the platform.",
	   "first_name": "Martijn",
	   "last_name": "Coenen",
	   "display_name": "Martijn Coenen",
	   "plusone_url": "https://plus.google.com/117330242772415836654",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/maco.png",
	   "user_id": "gooio2012/2124",
	   "speaker_id": "gooio2012/125//gooio2012/2124"
	  },
	  {
	   "bio": "Alan is a software engineer on the Google Accessibility Engineering team. He works on low-vision and blind accessibility for Android.",
	   "first_name": "Alan",
	   "last_name": "Viverette",
	   "display_name": "Alan Viverette",
	   "plusone_url": "https://plus.google.com/102998416034718374371",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2123",
	   "speaker_id": "gooio2012/127//gooio2012/2123"
	  },
	  {
	   "bio": "T. V. Raman is a research scientist at Google. He leads a team of engineers building innovative user interfaces on Android and ChromeOS, and researches creating highly efficient eyes-free interfaces.",
	   "first_name": "T.V.",
	   "last_name": "Raman",
	   "display_name": "T.V. Raman",
	   "plusone_url": "http://plus.google.com/103872873250909646668",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/raman.jpg",
	   "user_id": "gooio2012/2199",
	   "speaker_id": "gooio2012/127//gooio2012/2199"
	  },
	  {
	   "bio": "Charles is a software engineer at Google, working on the Eyes-Free Android project and ChromeVox. He also created the Fire Vox extension for Firefox and worked on Android Text-To-Speech.",
	   "first_name": "Charles",
	   "last_name": "Chen",
	   "display_name": "Charles Chen",
	   "plusone_url": "https://plus.google.com/u/0/111879113080767742009",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/clchen.jpg",
	   "user_id": "gooio2012/2200",
	   "speaker_id": "gooio2012/127//gooio2012/2200"
	  },
	  {
	   "bio": "Peter Lundblad works as a software engineer at Google.  He is part of the accessibility team and Android Eyes-Free project, focusing on Braille.",
	   "first_name": "Peter",
	   "last_name": "Lundblad",
	   "display_name": "Peter Lundblad",
	   "plusone_url": "http://plus.google.com/104780772893555468975",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/plundblad.jpg",
	   "user_id": "gooio2012/2201",
	   "speaker_id": "gooio2012/127//gooio2012/2201"
	  },
	  {
	   "user_id": "gooio2012/2333",
	   "first_name": "Dmitry",
	   "last_name": "Grinberg",
	   "display_name": "Dmitry Grinberg",
	   "speaker_id": "gooio2012/128//gooio2012/2333"
	  },
	  {
	   "user_id": "gooio2012/2334",
	   "first_name": "Travis",
	   "last_name": "Geiselbrecht",
	   "display_name": "Travis Geiselbrecht",
	   "speaker_id": "gooio2012/128//gooio2012/2334"
	  },
	  {
	   "user_id": "gooio2012/2335",
	   "first_name": "Eric",
	   "last_name": "Schlaephfer",
	   "display_name": "Eric Schlaephfer",
	   "speaker_id": "gooio2012/128//gooio2012/2335"
	  },
	  {
	   "bio": "Christian has worked with Java and Linux his entire career. He joined Google in 2010 as Developer Advocate for Android and is now representing the Google TV product.",
	   "first_name": "Christian",
	   "last_name": "Kurzke",
	   "display_name": "Christian Kurzke",
	   "plusone_url": "http://google.com/profiles/cnkurzke",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/cgk.jpg",
	   "user_id": "gooio2012/2032",
	   "speaker_id": "gooio2012/1300//gooio2012/2032"
	  },
	  {
	   "bio": "Andrew is a Techlead/Manager for Google TV engineering team, responsible for GTV platform, AV, APAC deployment. Prior to Google, he was a S/W architect at Digeo and IBeam, and founded a few startups.",
	   "first_name": "Andrew",
	   "last_name": "Jeon",
	   "display_name": "Andrew Jeon",
	   "plusone_url": "https://plus.sandbox.google.com/116463905033105836087/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jeon.jpg",
	   "user_id": "gooio2012/2137",
	   "speaker_id": "gooio2012/1300//gooio2012/2137"
	  },
	  {
	   "bio": "Mark joined Google in 2006 and has worked on AdSense for Audio, Piper, and currently works on GoogleTV.",
	   "first_name": "Mark",
	   "last_name": "Lindner",
	   "display_name": "Mark Lindner",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mlindner.jpg",
	   "user_id": "gooio2012/2311",
	   "speaker_id": "gooio2012/1300//gooio2012/2311"
	  },
	  {
	   "bio": "Paul is a Developer Advocate with a passion for bringing game-changing platforms to life. He is therefore spreading the word about Google TV: an open apps platform for the biggest screen in the house.",
	   "first_name": "Paul",
	   "last_name": "Saxman",
	   "display_name": "Paul Saxman",
	   "plusone_url": "http://profiles.google.com/saxman",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/saxman.jpg",
	   "user_id": "gooio2012/2071",
	   "speaker_id": "gooio2012/1301//gooio2012/2071"
	  },
	  {
	   "bio": "Dave (ie Dr. Fisher) is a visiting faculty member from Rose-Hulman Institue of Technology. For the last year+, Dave has been on sabbatical doing development at Google for Google TV second screen apps.",
	   "first_name": "Dave",
	   "last_name": "Fisher",
	   "display_name": "Dave Fisher",
	   "plusone_url": "https://plus.google.com/u/0/108456725833219286408/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/fisherd.jpg",
	   "user_id": "gooio2012/2287",
	   "speaker_id": "gooio2012/1301//gooio2012/2287"
	  },
	  {
	   "bio": "Ossama manages the Google TV Developer Relations team, helping developers build apps for the best screen in the house. Previously he's worked on Google's Geospatial APIs, the AdWords API and Android.",
	   "first_name": "Ossama",
	   "last_name": "Alami",
	   "display_name": "Ossama Alami",
	   "plusone_url": "https://plus.google.com/110107698878563510922/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ossamaa.jpg",
	   "user_id": "gooio2012/2127",
	   "speaker_id": "gooio2012/1302//gooio2012/2127"
	  },
	  {
	   "bio": "Michael is the Director of UX Design for Google TV.  Committed to dragging TV into the 21st century: find something great to watch, connect to the devices in our lives, and give us more choices.",
	   "first_name": "Michael",
	   "last_name": "Sundermeyer",
	   "display_name": "Michael Sundermeyer",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/sundy.jpg",
	   "user_id": "gooio2012/2302",
	   "speaker_id": "gooio2012/1302//gooio2012/2302"
	  },
	  {
	   "bio": "Marco is the Android UX Lead for for Google Play. Prior to Google he worked on a wide range of industries, designing experiences for Nokia, LG Electronics, Siemens VDO and JWT.",
	   "first_name": "Marco",
	   "last_name": "Paglia",
	   "user_id": "gooio2012/2339",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/marcopaglia.jpg",
	   "display_name": "Marco Paglia",
	   "speaker_id": "gooio2012/131//gooio2012/2339"
	  },
	  {
	   "first_name": "Nick",
	   "last_name": "Butcher",
	   "user_id": "gooio2012/2044",
	   "plusone_url": "https://plus.google.com/118292708268361843293",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nbutcher.jpg",
	   "display_name": "Nick Butcher",
	   "speaker_id": "gooio2012/1400//gooio2012/2044"
	  },
	  {
	   "bio": "Richard is a Developer Advocate for Android at Google in the UK. He has enjoyed over 10 years in the mobile industry, including experience running a VC funded mobile start up, working for a large mobile operator and a few years consulting. With his J2ME and XHTML years behind him, Richard now supports Android developers bringing excellent apps to the Android Market.",
	   "first_name": "Richard",
	   "last_name": "Hyndman",
	   "display_name": "Richard Hyndman",
	   "plusone_url": "https://plus.google.com/115995639636688350464",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rhyndman.jpg",
	   "user_id": "gooio2012/2043",
	   "speaker_id": "gooio2012/1401//gooio2012/2043"
	  },
	  {
	   "user_id": "gooio2012/2347",
	   "first_name": "Fred",
	   "last_name": "Chung",
	   "display_name": "Fred Chung",
	   "speaker_id": "gooio2012/1401//gooio2012/2347"
	  },
	  {
	   "bio": "Trevor is a Senior Developer Programs Engineer with the Android team at Google. In addition to mobile, his interests include open source development, Ruby, user interface design, and digital identity.",
	   "first_name": "Trevor",
	   "last_name": "Johns",
	   "display_name": "Trevor Johns",
	   "plusone_url": "https://plus.google.com/112423705617084925086/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/trevorjohns.jpg",
	   "user_id": "gooio2012/2023",
	   "speaker_id": "gooio2012/1402//gooio2012/2023"
	  },
	  {
	   "bio": "Brett Morgan is the Developer Relations Engineer for the Blogger product. He is driven by the personal empowerment potential of massive communication democratization.",
	   "first_name": "Brett",
	   "last_name": "Morgan",
	   "display_name": "Brett Morgan",
	   "plusone_url": "http://profiles.google.com/brettmorgan",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/brettmorgan.jpg",
	   "user_id": "gooio2012/2309",
	   "speaker_id": "gooio2012/1404//gooio2012/2309"
	  },
	  {
	   "bio": "Quarup is currently a Site Reliability Engineer for multiple products including Google APIs. He previously worked as a Software Engineer in Google Earth and other computer graphics projects. His favorite Italian dish is lasagna.",
	   "first_name": "Quarup",
	   "last_name": "Barreirinhas",
	   "display_name": "Quarup Barreirinhas",
	   "plusone_url": "https://plus.sandbox.google.com/116557797192471030167",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/quarup.jpg",
	   "user_id": "gooio2012/2303",
	   "speaker_id": "gooio2012/1405//gooio2012/2303"
	  },
	  {
	   "bio": "Sean has been a Geospatial Scientist on the federal team since September 2008. He is the technical lead for US Federal Agencies' adoption of Google Maps Engine.",
	   "first_name": "Sean",
	   "last_name": "Wohltman",
	   "display_name": "Sean Wohltman",
	   "plusone_url": "https://plus.google.com/u/1/103404509327878238448/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/seanwohltman.jpg",
	   "user_id": "gooio2012/2118",
	   "speaker_id": "gooio2012/1406//gooio2012/2118"
	  },
	  {
	   "bio": "Mike is an engineer who works with the Federal team in Washington DC, helping to bring Google Earth and Google Maps to all levels of government from state and local to major federal agencies. He specializes in the enterprise versions of Google geospatial products.",
	   "first_name": "Mike",
	   "last_name": "Evanoff",
	   "display_name": "Mike Evanoff",
	   "plusone_url": "https://plus.google.com/115276229185510803899/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mevanoff.jpg",
	   "user_id": "gooio2012/2132",
	   "speaker_id": "gooio2012/1406//gooio2012/2132"
	  },
	  {
	   "bio": "Josh is a Developer Programs Engineer working with Maps and related API's.  He enjoys making new types of cartography and data visualization easy.",
	   "first_name": "Josh",
	   "last_name": "Livni",
	   "display_name": "Josh Livni",
	   "plusone_url": "https://plus.google.com/u/0/104558253096863947781/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jlivni.jpg",
	   "user_id": "gooio2012/2230",
	   "speaker_id": "gooio2012/1407//gooio2012/2230"
	  },
	  {
	   "bio": "Chris is a Developer Programs Engineer on the Google Maps APIs at Google Sydney. He specialises in the Javascript API, helping developers build awesome web maps. In his free time, he loves building awesome geographic data visualisations.",
	   "first_name": "Chris",
	   "last_name": "Broadfoot",
	   "display_name": "Chris Broadfoot",
	   "plusone_url": "https://plus.google.com/104108470253317688307/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/cbro.jpg",
	   "user_id": "gooio2012/2263",
	   "speaker_id": "gooio2012/1407//gooio2012/2263"
	  },
	  {
	   "bio": "Timothy is a Developer Advocate at Google working on Google+.  In his spare time he announces Roller Derby and believes in improving life through science and art.",
	   "first_name": "Timothy",
	   "last_name": "Jordan",
	   "display_name": "Timothy Jordan",
	   "plusone_url": "https://plus.google.com/113751353481962008916/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/timothyjordan.jpg",
	   "user_id": "gooio2012/2011",
	   "speaker_id": "gooio2012/1409//gooio2012/2011"
	  },
	  {
	   "bio": "Wolff is a Developer Programs Engineer at Google working on social products. Before Google, he spent 12 years in the game industry. He also, for some reason, has a PhD in artificial intelligence.",
	   "first_name": "Wolff",
	   "last_name": "Dobson",
	   "display_name": "Wolff Dobson",
	   "plusone_url": "https://plus.google.com/103772069584080057731/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/wolff.jpg",
	   "user_id": "gooio2012/2059",
	   "speaker_id": "gooio2012/1410//gooio2012/2059"
	  },
	  {
	   "bio": "PaulKinlan is a Senior Developer Advocate for Chrome at Google in London working on and loving web apps, app stacks and Web Intents",
	   "first_name": "Paul",
	   "last_name": "Kinlan",
	   "display_name": "Paul Kinlan",
	   "plusone_url": "https://plus.google.com/u/0/116059998563577101552/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/paulkinlan.jpg",
	   "user_id": "gooio2012/2036",
	   "speaker_id": "gooio2012/1411//gooio2012/2036"
	  },
	  {
	   "bio": "Greg Billock is a software engineer at Google working on implementing Web Intents within the Chromium project",
	   "first_name": "Greg",
	   "last_name": "Billock",
	   "display_name": "Greg Billock",
	   "plusone_url": "https://plus.google.com/116540516771641623238",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/gbillock.jpg",
	   "user_id": "gooio2012/2284",
	   "speaker_id": "gooio2012/1411//gooio2012/2284"
	  },
	  {
	   "bio": "Rachel is a software engineer at Google, working on Chromium - specifically, Web Intents. And if she has some spare time, she spends it on evangelizing HTML5 for game development.",
	   "first_name": "Rachel",
	   "last_name": "Blum",
	   "display_name": "Rachel Blum",
	   "plusone_url": "https://plus.google.com/u/0/107226275692313566931/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/groby.jpg",
	   "user_id": "gooio2012/2288",
	   "speaker_id": "gooio2012/1411//gooio2012/2288"
	  },
	  {
	   "bio": "Seth is a web engineer and Chrome Developer Advocate. He is a developer, author, and conference organizer. Seth is helping developers learn and use Dart.",
	   "first_name": "Seth",
	   "last_name": "Ladd",
	   "display_name": "Seth Ladd",
	   "plusone_url": "https://plus.google.com/118397406534237711570/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/sethladd.jpg",
	   "user_id": "gooio2012/2273",
	   "speaker_id": "gooio2012/1412//gooio2012/2273"
	  },
	  {
	   "bio": "Jaime joined Google in 2010 and is a software engineer on the Dart team currently working on the Dart Editor.",
	   "first_name": "Jaime",
	   "last_name": "Wren",
	   "display_name": "Jaime Wren",
	   "plusone_url": "https://plus.google.com/109304325600684021664",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jwren.jpg",
	   "user_id": "gooio2012/2277",
	   "speaker_id": "gooio2012/1412//gooio2012/2277"
	  },
	  {
	   "bio": "Eiji is a Developer Advocate for Chrome at Google. Eiji works closely with web application developers, helping them understand HTML5, open web technologies, WebStore, DevTools and so on. Before joining Google, he has been specialized in SocialWeb technologies.",
	   "first_name": "Eiji",
	   "last_name": "Kitamura",
	   "display_name": "Eiji Kitamura",
	   "plusone_url": "https://plus.google.com/107085977904914121234/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/agektmr.jpg",
	   "user_id": "gooio2012/2029",
	   "speaker_id": "gooio2012/1413//gooio2012/2029"
	  },
	  {
	   "bio": "Alex is a Chrome Developer Advocate. He has been actively involved with web standards and development for many years. His passion is the Open Web.",
	   "first_name": "Alex",
	   "last_name": "Danilo",
	   "display_name": "Alex Danilo",
	   "plusone_url": "https://plus.google.com/113205278198625312096/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/adanilo.jpg",
	   "user_id": "gooio2012/2274",
	   "speaker_id": "gooio2012/1413//gooio2012/2274"
	  },
	  {
	   "bio": "Raul is the Technical Lead responsible for the YouTube API",
	   "first_name": "Raul",
	   "last_name": "Furnică",
	   "display_name": "Raul Furnică",
	   "plusone_url": "https://plus.google.com/108113886705877339238",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/raul.jpg",
	   "user_id": "gooio2012/2293",
	   "speaker_id": "gooio2012/1415//gooio2012/2293"
	  },
	  {
	   "bio": "Christoph works on YouTube Analytics. He is responsible for all API related matters.",
	   "first_name": "Christoph",
	   "last_name": "Schwab-Ganser",
	   "user_id": "gooio2012/2348",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/chganser.jpg",
	   "display_name": "Christoph Schwab-Ganser",
	   "speaker_id": "gooio2012/1415//gooio2012/2348"
	  },
	  {
	   "bio": "Takashi Matsuo is a developer advocate for Google App Engine and iGoogle. He joined Google in 2010 after three years as a Google App Engine Guru in Japan, and two years as a manager of Tokyo GTUG. He is an original author of a web framework named “Kay”, made specifically for Google App Engine.",
	   "first_name": "Takashi",
	   "last_name": "Matsuo",
	   "display_name": "Takashi Matsuo",
	   "plusone_url": "https://plus.google.com/110554344789668969711/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/tmatsuo.jpg",
	   "user_id": "gooio2012/2053",
	   "speaker_id": "gooio2012/1417//gooio2012/2053"
	  },
	  {
	   "bio": "Johan joined Google in 2011 as a Developer Programs Engineer based in Zurich. He is currently focusing on App Engine and the developers community.",
	   "first_name": "Johan",
	   "last_name": "Euphrosine",
	   "display_name": "Johan Euphrosine",
	   "plusone_url": "https://plus.google.com/111042085517496880918/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/proppy.jpg",
	   "user_id": "gooio2012/2054",
	   "speaker_id": "gooio2012/1417//gooio2012/2054"
	  },
	  {
	   "bio": "Jordan is a software engineer working on BigQuery.",
	   "first_name": "Jordan",
	   "last_name": "Tigani",
	   "display_name": "Jordan Tigani",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/tigani.jpg",
	   "user_id": "gooio2012/2239",
	   "speaker_id": "gooio2012/1417//gooio2012/2239"
	  },
	  {
	   "first_name": "Nate",
	   "last_name": "White",
	   "user_id": "gooio2012/2304",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nwhite.jpg",
	   "display_name": "Nate White",
	   "speaker_id": "gooio2012/1417//gooio2012/2304"
	  },
	  {
	   "bio": "Dan joined the Google Developer Relations team in 2007. His current focus is on Google cloud products. He's previously worked on iGoogle, OpenSocial, Google Apps APIs, Gmail contextual gadgets, and the Google Apps Marketplace.",
	   "first_name": "Dan",
	   "last_name": "Holevoet",
	   "display_name": "Dan Holevoet",
	   "plusone_url": "https://plus.google.com/u/0/112953471808394921173/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/danielholevoet.jpg",
	   "user_id": "gooio2012/2158",
	   "speaker_id": "gooio2012/1418//gooio2012/2158"
	  },
	  {
	   "bio": "Ram is a software engineer working on Google Plugin for Eclipse, which provides tooling for Google Cloud platform.",
	   "first_name": "Ram",
	   "last_name": "Parkkal Krishnamurthy",
	   "display_name": "Ram Parkkal Krishnamurthy",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ramparikkal.jpg",
	   "user_id": "gooio2012/2278",
	   "speaker_id": "gooio2012/1418//gooio2012/2278"
	  },
	  {
	   "first_name": "Jun",
	   "last_name": "Yang",
	   "user_id": "gooio2012/2305",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jyang.jpg",
	   "display_name": "Jun Yang",
	   "speaker_id": "gooio2012/1418//gooio2012/2305"
	  },
	  {
	   "first_name": "Rafe",
	   "last_name": "Kaplan",
	   "user_id": "gooio2012/2306",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rafek.jpg",
	   "display_name": "Rafe Kaplan",
	   "speaker_id": "gooio2012/1418//gooio2012/2306"
	  },
	  {
	   "bio": "Peng is a Developer Programs Engineer for Google Commerce. Having helped thousands of developers integrate the Commerce APIs since 2007, he's an expert in enabling monetization for your web app.",
	   "first_name": "Peng",
	   "last_name": "Ying",
	   "display_name": "Peng Ying",
	   "plusone_url": "https://plus.google.com/115132759088093329854",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/pying.jpg",
	   "user_id": "gooio2012/2069",
	   "speaker_id": "gooio2012/1420//gooio2012/2069"
	  },
	  {
	   "bio": "Mihai is a Developer Advocate passionate about helping developers get the most out of Google APIs. With a background in engineering and business, he has worked on Google Chrome, Desktop and Commerce. Before joining Google, Mihai worked at Microsoft on IE, Java VM, and .NET.",
	   "first_name": "Mihai",
	   "last_name": "Ionescu",
	   "display_name": "Mihai Ionescu",
	   "plusone_url": "https://plus.google.com/113955469903735289920",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mihai.jpg",
	   "user_id": "gooio2012/2073",
	   "speaker_id": "gooio2012/1420//gooio2012/2073"
	  },
	  {
	   "bio": "Claudio is an engineer in the Google Drive Developer Relations team. His interests include Google APIs, open-source projects and coffee.",
	   "first_name": "Claudio",
	   "last_name": "Cherubino",
	   "display_name": "Claudio Cherubino",
	   "plusone_url": "https://plus.google.com/u/0/113491432324942287374/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ccherubino.jpg",
	   "user_id": "gooio2012/2226",
	   "speaker_id": "gooio2012/1421//gooio2012/2226"
	  },
	  {
	   "bio": "Erik manages the Chrome Apps, Extensions and Native Client teams.",
	   "first_name": "Erik",
	   "last_name": "Kay",
	   "display_name": "Erik Kay",
	   "plusone_url": "https://plus.google.com/u/0/106818816637347055983/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/erikkay.jpg",
	   "user_id": "gooio2012/2172",
	   "speaker_id": "gooio2012/200//gooio2012/2172"
	  },
	  {
	   "bio": "Mihai is a Chrome Apps Tech Lead. He joined Google in 2004, and has previously worked on Google AdWords and Google Reader.",
	   "first_name": "Mihai",
	   "last_name": "Parparita",
	   "display_name": "Mihai Parparita",
	   "plusone_url": "https://plus.google.com/111567061469336027617/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mihaip.jpg",
	   "user_id": "gooio2012/2323",
	   "speaker_id": "gooio2012/200//gooio2012/2323"
	  },
	  {
	   "bio": "Pete is a Developer Advocate on the Chrome Web Store and loves the open web. He recently learned that HTML5 and CSS3 looks a lot better than overlapping \u003cblink\u003e, \u003cmarquee\u003e and \u003cfont\u003e tags.",
	   "first_name": "Pete",
	   "last_name": "LePage",
	   "display_name": "Pete LePage",
	   "plusone_url": "https://plus.google.com/117555368223516714643/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/petele.jpg",
	   "user_id": "gooio2012/2010",
	   "speaker_id": "gooio2012/201//gooio2012/2010"
	  },
	  {
	   "bio": "Colt is a Developer Advocate on HTML5 and Native Client gaming in Chrome; When he's not working with partners, Colt spends his time preparing for an invasion of giant ants from outer space.",
	   "first_name": "Colton",
	   "last_name": "McAnlis",
	   "display_name": "Colton McAnlis",
	   "plusone_url": "https://plus.google.com/105062545746290691206/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/colton.jpg",
	   "user_id": "gooio2012/2173",
	   "speaker_id": "gooio2012/202//gooio2012/2173"
	  },
	  {
	   "bio": "Noel is a software engineer at Google with a background in the games industry.  He is part of the NaCl team working on the SDK.",
	   "first_name": "Noel",
	   "last_name": "Allen",
	   "display_name": "Noel Allen",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/noelallen.jpg",
	   "user_id": "gooio2012/2203",
	   "speaker_id": "gooio2012/202//gooio2012/2203"
	  },
	  {
	   "bio": "Nick is a software engineer working on Native Client at Google.  He holds a PhD in electrical engineering from the University of Illinois at Urbana-Champaign.",
	   "first_name": "Nick",
	   "last_name": "Bray",
	   "display_name": "Nick Bray",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ncbray.jpg",
	   "user_id": "gooio2012/2168",
	   "speaker_id": "gooio2012/203//gooio2012/2168"
	  },
	  {
	   "bio": "Eric is a Senior Developer Programs Engineer on the Chrome team. He is the author of \"Using the HTML5 Filesystem API\" and one of the core members of html5rocks.com. He hearts the web.",
	   "first_name": "Eric",
	   "last_name": "Bidelman",
	   "display_name": "Eric Bidelman",
	   "plusone_url": "https://plus.google.com/118075919496626375791/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ericbidelman.jpg",
	   "user_id": "gooio2012/2016",
	   "speaker_id": "gooio2012/204//gooio2012/2016"
	  },
	  {
	   "bio": "Alex Komoroske is a Product Manager on Chrome's Open Web Platform team. Before he was a product manager he was a web developer--and even today loves building web apps in his spare time. Now he's excited to be helping other web developers make awesome apps that harness the open web platform's full potential.",
	   "first_name": "Alex",
	   "last_name": "Komoroske",
	   "display_name": "Alex Komoroske",
	   "plusone_url": "https://plus.google.com/117456450182805712050",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/komoroske.jpg",
	   "user_id": "gooio2012/2205",
	   "speaker_id": "gooio2012/205//gooio2012/2205"
	  },
	  {
	   "user_id": "gooio2012/2357",
	   "first_name": "Dimitri",
	   "last_name": "Glazkov",
	   "display_name": "Dimitri Glazkov",
	   "speaker_id": "gooio2012/205//gooio2012/2357"
	  },
	  {
	   "bio": "Boris is a UI engineer on the Google Chrome developer relations team. Before joining Google, he lived on a tropical island in the Atlantic.",
	   "first_name": "Boris",
	   "last_name": "Smus",
	   "display_name": "Boris Smus",
	   "plusone_url": "https://plus.google.com/115694705577863745195/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/smus.jpg",
	   "user_id": "gooio2012/2206",
	   "speaker_id": "gooio2012/206//gooio2012/2206"
	  },
	  {
	   "first_name": "Ryan",
	   "last_name": "Fioravanti",
	   "user_id": "gooio2012/2291",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Ryan Fioravanti",
	   "speaker_id": "gooio2012/207//gooio2012/2291"
	  },
	  {
	   "bio": "Mike is a philosophy student cleverly disguised as a developer advocate on the Chrome team in Munich, Germany. He's a Chromium committer, and has worked as a web developer at companies like Yahoo! and the Süddeutsche Zeitung.",
	   "first_name": "Mike",
	   "last_name": "West",
	   "display_name": "Mike West",
	   "plusone_url": "https://plus.google.com/104437754419996754779/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mkwst.jpg",
	   "user_id": "gooio2012/2052",
	   "speaker_id": "gooio2012/208//gooio2012/2052"
	  },
	  {
	   "bio": "Tom is an Associate Product Manager on the Chrome team, focusing on Chrome's GPU acceleration efforts.",
	   "first_name": "Tom",
	   "last_name": "Wiltzius",
	   "display_name": "Tom Wiltzius",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/wiltzius.jpg",
	   "user_id": "gooio2012/2175",
	   "speaker_id": "gooio2012/209//gooio2012/2175"
	  },
	  {
	   "bio": "Nat Duca works on the Chrome team to make browsing the web as jank-free and smooth as possible.",
	   "first_name": "Nat",
	   "last_name": "Duca",
	   "display_name": "Nat Duca",
	   "plusone_url": "https://plus.sandbox.google.com/u/0/108226521004258409305/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nduca.jpg",
	   "user_id": "gooio2012/2194",
	   "speaker_id": "gooio2012/209//gooio2012/2194"
	  },
	  {
	   "bio": "Dan works on the team that's making the Dart platform great for client applications. He's based in Google's Seattle office.",
	   "first_name": "Dan",
	   "last_name": "Grove",
	   "display_name": "Dan Grove",
	   "plusone_url": "https://plus.google.com/107591461536552250769/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dgrove.jpg",
	   "user_id": "gooio2012/2328",
	   "speaker_id": "gooio2012/211//gooio2012/2328"
	  },
	  {
	   "bio": "Vijay Menon is a software engineer at Google Seattle working on integrating the Dart language, libraries, and runtime with the browser.",
	   "first_name": "Vijay",
	   "last_name": "Menon",
	   "display_name": "Vijay Menon",
	   "plusone_url": "https://plus.google.com/114045999004646044580/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/vsm.jpg",
	   "user_id": "gooio2012/2329",
	   "speaker_id": "gooio2012/211//gooio2012/2329"
	  },
	  {
	   "bio": "Lars is an engineer at Google. After spending 25 years implementing various object-oriented programming languages, he initiated the Dart project with Kasper Lund to improved the state of web programming.",
	   "first_name": "Lars",
	   "last_name": "Bak",
	   "display_name": "Lars Bak",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/bak.jpg",
	   "user_id": "gooio2012/2208",
	   "speaker_id": "gooio2012/212//gooio2012/2208"
	  },
	  {
	   "bio": "Kasper Lund is a software engineer at Google working on the design and implementation of Dart. Before starting the Dart project, Kasper spent a few years implementing the V8 JavaScript engine.",
	   "first_name": "Kasper",
	   "last_name": "Lund",
	   "display_name": "Kasper Lund",
	   "plusone_url": "https://plus.google.com/100258330325630692559",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kasperl.jpg",
	   "user_id": "gooio2012/2209",
	   "speaker_id": "gooio2012/212//gooio2012/2209"
	  },
	  {
	   "bio": "Sam Dutton is a Developer Advocate for Google Chrome, focusing on WebRTC, media APIs and the Dev Tools. He previously worked for the BBC and ITN, and is a governor at Ravenstone School in London.",
	   "first_name": "Sam",
	   "last_name": "Dutton",
	   "display_name": "Sam Dutton",
	   "plusone_url": "plus.samdutton.com",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dutton.jpg",
	   "user_id": "gooio2012/2035",
	   "speaker_id": "gooio2012/213//gooio2012/2035"
	  },
	  {
	   "bio": "Pavel is a software engineer working on Google Chrome Developer Tools and WebKit's Inspector.",
	   "first_name": "Pavel",
	   "last_name": "Feldman",
	   "display_name": "Pavel Feldman",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/pfeldman.jpg",
	   "user_id": "gooio2012/2210",
	   "speaker_id": "gooio2012/213//gooio2012/2210"
	  },
	  {
	   "first_name": "Jeff",
	   "last_name": "Chang",
	   "user_id": "gooio2012/2211",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jeffreyc.jpg",
	   "display_name": "Jeff Chang",
	   "speaker_id": "gooio2012/214//gooio2012/2211"
	  },
	  {
	   "bio": "Paul does developer relations for Chrome. He also develops the feature detection library Modernizr and created HTML5 Boilerplate, HTML5 Please, and developer community initiatives like Move the Web Forward.",
	   "first_name": "Paul",
	   "last_name": "Irish",
	   "display_name": "Paul Irish",
	   "plusone_url": "https://plus.google.com/113127438179392830442/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/paulirish.jpg",
	   "user_id": "gooio2012/2017",
	   "speaker_id": "gooio2012/215//gooio2012/2017"
	  },
	  {
	   "bio": "James is a Tech Lead on Chrome and develops technologies to create compelling apps in Chrome.  He also created and chairs the Web Intents Task Force in the W3C.",
	   "first_name": "James",
	   "last_name": "Hawkins",
	   "display_name": "James Hawkins",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jhawkins.jpg",
	   "user_id": "gooio2012/2195",
	   "speaker_id": "gooio2012/216//gooio2012/2195"
	  },
	  {
	   "bio": "Justin Uberti is the technical lead for the WebRTC effort at Google. Previously, Justin helped create Google+ Hangouts and Google Video Chat.",
	   "first_name": "Justin",
	   "last_name": "Uberti",
	   "display_name": "Justin Uberti",
	   "plusone_url": "https://plus.google.com/103619602351433955946/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/juberti.jpg",
	   "user_id": "gooio2012/2212",
	   "speaker_id": "gooio2012/217//gooio2012/2212"
	  },
	  {
	   "user_id": "gooio2012/2341",
	   "first_name": "Rajeev",
	   "last_name": "Dayal",
	   "display_name": "Rajeev Dayal",
	   "speaker_id": "gooio2012/218//gooio2012/2341"
	  },
	  {
	   "bio": "Steve is Head Performance Engineer at Google. He wrote High Performance Web Sites and Even Faster Web Sites. He created YSlow, HTTP Archive, Cuzillion, Jdrop, ControlJS, and Browserscope. He co-chairs Velocity.",
	   "first_name": "Steve",
	   "last_name": "Souders",
	   "display_name": "Steve Souders",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/souders.jpg",
	   "user_id": "gooio2012/2213",
	   "speaker_id": "gooio2012/219//gooio2012/2213"
	  },
	  {
	   "bio": "Jorge works on the Chrome Security team, busily removing privileges from pieces of Chrome and Chrome OS. He likes getting to be paranoid for a living.",
	   "first_name": "Jorge",
	   "last_name": "Lucangeli Obes",
	   "display_name": "Jorge Lucangeli Obes",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jorgelo.jpg",
	   "user_id": "gooio2012/2214",
	   "speaker_id": "gooio2012/220//gooio2012/2214"
	  },
	  {
	   "bio": "Chris is a Developer Advocate for the Open Web Platform.  He's worked on the web platform since 1993.  He either hearts the web or is a serious masochist.",
	   "first_name": "Chris",
	   "last_name": "Wilson",
	   "display_name": "Chris Wilson",
	   "plusone_url": "https://plus.google.com/u/0/106422711035746240826/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/cwilso.jpg",
	   "user_id": "gooio2012/2215",
	   "speaker_id": "gooio2012/221//gooio2012/2215"
	  },
	  {
	   "bio": "Akshay is an Associate Product Manager at Google. He currently works on expanding Google Cloud Print and improving the printing experience in Chrome and Chrome OS.",
	   "first_name": "Akshay",
	   "last_name": "Kannan",
	   "display_name": "Akshay Kannan",
	   "plusone_url": "https://plus.google.com/101368049913938168046/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/akshayk.jpg",
	   "user_id": "gooio2012/2170",
	   "speaker_id": "gooio2012/222//gooio2012/2170"
	  },
	  {
	   "bio": "Rachel is a software engineer on the Google Accessibility Engineering team. She works on the ChromeVox screen reader and on accessibility in Google web apps and shared libraries.",
	   "first_name": "Rachel",
	   "last_name": "Shearer",
	   "display_name": "Rachel Shearer",
	   "plusone_url": "https://plus.google.com/109888479311908919840/posts",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2008",
	   "speaker_id": "gooio2012/223//gooio2012/2008"
	  },
	  {
	   "bio": "Dominic hacks on Chrome accessibility and text-to-speech. Prior to working on Chrome, he's best known as the original author of Audacity, the open-source audio editor.",
	   "first_name": "Dominic",
	   "last_name": "Mazzoni",
	   "display_name": "Dominic Mazzoni",
	   "plusone_url": "https://plus.sandbox.google.com/u/1/102359524554504133250",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dmazzoni.jpg",
	   "user_id": "gooio2012/2216",
	   "speaker_id": "gooio2012/223//gooio2012/2216"
	  },
	  {
	   "bio": "Daniel is the Technical Lead and Manager of the V8 development team in Munich. His mission is to make V8 the best JavaScript engine available in any browser, focusing especially on performance.",
	   "first_name": "Daniel",
	   "last_name": "Clifford",
	   "display_name": "Daniel Clifford",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2061",
	   "speaker_id": "gooio2012/224//gooio2012/2061"
	  },
	  {
	   "bio": "Vincent Hardy works on Web Standards. Vincent is working with the CSS working group, the FX task force and the SVG working group. He currently works on CSS shaders, CSS regions, CSS exclusions, and Scalable Vector Graphics (SVG).",
	   "first_name": "Vincent",
	   "last_name": "Hardy",
	   "display_name": "Vincent Hardy",
	   "plusone_url": "https://plus.google.com/105678358351118101188/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/vincenthardy.jpg",
	   "user_id": "gooio2012/2390",
	   "speaker_id": "gooio2012/225//gooio2012/2390"
	  },
	  {
	   "bio": "Christian Cantrell is an Application Developer and Product Manager on the Web Platform team at Adobe. He's also a science fiction writer and a photographer.",
	   "first_name": "Christian",
	   "last_name": "Cantrell",
	   "display_name": "Christian Cantrell",
	   "plusone_url": "https://plus.google.com/113556260101951952093/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/christiancantrell.jpg",
	   "user_id": "gooio2012/2391",
	   "speaker_id": "gooio2012/225//gooio2012/2391"
	  },
	  {
	   "bio": "Ray is an engineer who works on the GWT compiler, passionate about crunching Javascript smaller and making it faster.",
	   "first_name": "Ray",
	   "last_name": "Cromwell",
	   "display_name": "Ray Cromwell",
	   "plusone_url": "https://plus.google.com/u/0/110412141990454266397",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/cromwellian.jpg",
	   "user_id": "gooio2012/2275",
	   "speaker_id": "gooio2012/226//gooio2012/2275"
	  },
	  {
	   "first_name": "Brian",
	   "last_name": "Quinlan",
	   "user_id": "gooio2012/2300",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Brian Quinlan",
	   "speaker_id": "gooio2012/300//gooio2012/2300"
	  },
	  {
	   "user_id": "gooio2012/2232",
	   "first_name": "Alexander",
	   "last_name": "Power",
	   "display_name": "Alexander Power",
	   "speaker_id": "gooio2012/301//gooio2012/2232"
	  },
	  {
	   "first_name": "Doug",
	   "last_name": "Orr",
	   "user_id": "gooio2012/2295",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Doug Orr",
	   "speaker_id": "gooio2012/301//gooio2012/2295"
	  },
	  {
	   "first_name": "Jesse",
	   "last_name": "Jiang",
	   "user_id": "gooio2012/2296",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Jesse Jiang",
	   "speaker_id": "gooio2012/301//gooio2012/2296"
	  },
	  {
	   "bio": "Craig McLuckie is a Product Manager at Google working on the cloud platform.   Before Google he spent 12 years working on developer framework and server products.",
	   "first_name": "Craig",
	   "last_name": "McLuckie",
	   "display_name": "Craig McLuckie",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/craigmcl.jpg",
	   "user_id": "gooio2012/2111",
	   "speaker_id": "gooio2012/302//gooio2012/2111"
	  },
	  {
	   "user_id": "gooio2012/2337",
	   "first_name": "Martin",
	   "last_name": "Gannholm",
	   "display_name": "Martin Gannholm",
	   "speaker_id": "gooio2012/302//gooio2012/2337"
	  },
	  {
	   "bio": "Christina is a product manager on the App Engine team.",
	   "first_name": "Christina",
	   "last_name": "Ilvento",
	   "display_name": "Christina Ilvento",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/cilvento.jpg",
	   "user_id": "gooio2012/2227",
	   "speaker_id": "gooio2012/303//gooio2012/2227"
	  },
	  {
	   "bio": "Brad Abrams is a Product Manager for the Cloud Platform team at Google. Before joining Google, Brad helped create the Common Language Runtime and the .NET Framework.  He is author of several books from Addison Wesley including Framework Design Guidelines.",
	   "first_name": "Brad",
	   "last_name": "Abrams",
	   "display_name": "Brad Abrams",
	   "plusone_url": "https://plus.google.com/106920059607812615730/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/bma.jpg",
	   "user_id": "gooio2012/2038",
	   "speaker_id": "gooio2012/304//gooio2012/2038"
	  },
	  {
	   "bio": "Ido is a Developer Advocate for Google Chrome OS. He has been a developer and building companies for more then 15 years. He still likes to develop web applications, but only ones with amazing UX. He has a wide array of skills and experience, including Java, php, perl, JavaScript--and all aspects of agile development and scaling systems.",
	   "first_name": "Ido",
	   "last_name": "Green",
	   "display_name": "Ido Green",
	   "plusone_url": "http://plus.ly/greenido",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/idog.jpg",
	   "user_id": "gooio2012/2051",
	   "speaker_id": "gooio2012/304//gooio2012/2051"
	  },
	  {
	   "bio": "Fred Sauer is a Developer Advocate at Google where most of his time is devoted to Google App Engine and Google Web Toolkit. He is the author of various GWT related open source projects including gwt-dnd (providing in browser Drag and Drop capabilities), gwt-log (an advanced logging framework) and gwt-voices (for cross browser sound support). Fred has dedicated much of his career to Java related development, with an increasing focus on Web 2.0 technologies. As a consultant he has worked on a wide variety of projects in North America, Asia and Europe, primarily in the financial and billing industry.",
	   "first_name": "Fred",
	   "last_name": "Sauer",
	   "display_name": "Fred Sauer",
	   "plusone_url": "https://plus.google.com/u/0/115640166224745944209",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/fredsa.jpg",
	   "user_id": "gooio2012/2050",
	   "speaker_id": "gooio2012/305//gooio2012/2050"
	  },
	  {
	   "bio": "Alfred joined Google after getting his Ph.D. in Computer Science from the University of California, Davis. Since joining Google's App Engine team, he has worked primarily on improving the Datastore.",
	   "first_name": "Alfred",
	   "last_name": "Fuller",
	   "display_name": "Alfred Fuller",
	   "plusone_url": "https://plus.google.com/107816913230059054193",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/arfuller.jpg",
	   "user_id": "gooio2012/2156",
	   "speaker_id": "gooio2012/306//gooio2012/2156"
	  },
	  {
	   "bio": "Ken is a software engineer on the Cloud SQL team.  During his time at Google, he has also worked on Bigtable, Google App Engine, and Google's internal cluster management system.",
	   "first_name": "Ken",
	   "last_name": "Ashcraft",
	   "display_name": "Ken Ashcraft",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kash.jpg",
	   "user_id": "gooio2012/2225",
	   "speaker_id": "gooio2012/306//gooio2012/2225"
	  },
	  {
	   "bio": "Michael is a Developer Programs Engineer supporting developers who work with Google's Cloud platform. With many years of experience working for research and non-profit organizations, he is interested in making Big Data analysis more accessible and affordable.",
	   "first_name": "Michael",
	   "last_name": "Manoochehri",
	   "display_name": "Michael Manoochehri",
	   "plusone_url": "https://plus.google.com/u/0/106641576811513429422/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/manoochehri.jpg",
	   "user_id": "gooio2012/2064",
	   "speaker_id": "gooio2012/307//gooio2012/2064"
	  },
	  {
	   "bio": "Craig Chambers leads several massively parallel computing projects at Google.  Previously he was a Professor of Computer Science at the University of Washington.",
	   "first_name": "Craig",
	   "last_name": "Chambers",
	   "display_name": "Craig Chambers",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/chambers.jpg",
	   "user_id": "gooio2012/2130",
	   "speaker_id": "gooio2012/307//gooio2012/2130"
	  },
	  {
	   "first_name": "Adam",
	   "last_name": "Eijdenberg",
	   "user_id": "gooio2012/2297",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Adam Eijdenberg",
	   "speaker_id": "gooio2012/308//gooio2012/2297"
	  },
	  {
	   "bio": "Alon is a Technical Lead and Engineering Manager for the Google App Engine team. He is based out of San Francisco.",
	   "first_name": "Alon",
	   "last_name": "Levi",
	   "display_name": "Alon Levi",
	   "plusone_url": "https://plus.google.com/104703109675446407948",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/alevi.jpg",
	   "user_id": "gooio2012/2298",
	   "speaker_id": "gooio2012/308//gooio2012/2298"
	  },
	  {
	   "bio": "Navneet Joneja is a product manager at Google, focusing on data in the cloud. Prior to joining Google in 2011, Navneet led cloud initiatives at Yahoo and Amazon.",
	   "first_name": "Navneet",
	   "last_name": "Joneja",
	   "display_name": "Navneet Joneja",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2119",
	   "speaker_id": "gooio2012/309//gooio2012/2119"
	  },
	  {
	   "bio": "Ju-kay is PM lead on Google's Big Data offerings. He works on services enabling businesses to harness Google's unparalleled data processing infrastructure to tackle their growing data analysis needs.",
	   "first_name": "Ju-kay",
	   "last_name": "Kwek",
	   "display_name": "Ju-kay Kwek",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jukay.jpg",
	   "user_id": "gooio2012/2236",
	   "speaker_id": "gooio2012/309//gooio2012/2236"
	  },
	  {
	   "bio": "Greg is a Site Reliability Engineer on Google App Engine. He has previously worked on taskqueue and the Python 2.7 runtime.",
	   "first_name": "Greg",
	   "last_name": "Darke",
	   "display_name": "Greg Darke",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2133",
	   "speaker_id": "gooio2012/310//gooio2012/2133"
	  },
	  {
	   "bio": "Marzia is the TPM for App Engine.",
	   "first_name": "Marzia",
	   "last_name": "Niccolai",
	   "display_name": "Marzia Niccolai",
	   "plusone_url": "https://plus.google.com/u/0/113285041446743921106/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/marzia.jpg",
	   "user_id": "gooio2012/2140",
	   "speaker_id": "gooio2012/310//gooio2012/2140"
	  },
	  {
	   "bio": "Troy is an engineer on the App Engine team.",
	   "first_name": "Troy",
	   "last_name": "Trimble",
	   "display_name": "Troy Trimble",
	   "plusone_url": "https://plus.google.com/116108536381888996988",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ttrimble.jpg",
	   "user_id": "gooio2012/2197",
	   "speaker_id": "gooio2012/310//gooio2012/2197"
	  },
	  {
	   "bio": "Chris Ramsdale joined Google in 2009 and is currently a Product Manager for Google App Engine focused on developer tools and platform services.",
	   "first_name": "Chris",
	   "last_name": "Ramsdale",
	   "display_name": "Chris Ramsdale",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/cramsdale.jpg",
	   "user_id": "gooio2012/2221",
	   "speaker_id": "gooio2012/311//gooio2012/2221"
	  },
	  {
	   "bio": "Mitch is Tech Lead for the Google App Engine Java team in San Francisco. He was previously a mathematics professor at FIU in Miami.",
	   "first_name": "Mitch",
	   "last_name": "Rudominer",
	   "display_name": "Mitch Rudominer",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rudominer.jpg",
	   "user_id": "gooio2012/2234",
	   "speaker_id": "gooio2012/311//gooio2012/2234"
	  },
	  {
	   "bio": "Ryan is a Developer Advocate at Google, focused on cloud data services.  He's been at Google for 5 years and previously helped build out the Google Apps ISV ecosystem.  He published his first book \"Getting Started with OAuth 2.0\" with O'Reilly.",
	   "first_name": "Ryan",
	   "last_name": "Boyd",
	   "display_name": "Ryan Boyd",
	   "plusone_url": "https://plus.google.com/110634877589748180443/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ryanboyd.jpg",
	   "user_id": "gooio2012/2049",
	   "speaker_id": "gooio2012/312//gooio2012/2049"
	  },
	  {
	   "bio": "Joe is a Staff Software Engineer and Tech Lead focusing on upcoming cloud products  He has done a plethora of things at Google including early Google Talk, Goog-411 and Adwords keyword suggestions.",
	   "first_name": "Joe",
	   "last_name": "Beda",
	   "display_name": "Joe Beda",
	   "plusone_url": "https://plus.google.com/110707185519531431463/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jbeda.jpg",
	   "user_id": "gooio2012/2110",
	   "speaker_id": "gooio2012/313//gooio2012/2110"
	  },
	  {
	   "user_id": "gooio2012/2338",
	   "first_name": "Evan",
	   "last_name": "Anderson",
	   "display_name": "Evan Anderson",
	   "speaker_id": "gooio2012/313//gooio2012/2338"
	  },
	  {
	   "bio": "Nathan Herring joined Google in 2010, and is a software engineer on the Google Cloud Storage product, focusing on API plumbing and security.",
	   "first_name": "Nathan",
	   "last_name": "Herring",
	   "display_name": "Nathan Herring",
	   "plusone_url": "https://plus.google.com/u/0/111096047037894992075",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nherring.jpg",
	   "user_id": "gooio2012/2310",
	   "speaker_id": "gooio2012/314//gooio2012/2310"
	  },
	  {
	   "bio": "Robert manages the Support Engineering team and part of the Internal Technology Resident (ITR) team at Google, among other things.  They pushed a majority of their applications to the cloud platform.",
	   "first_name": "Robert",
	   "last_name": "Pufky",
	   "display_name": "Robert Pufky",
	   "plusone_url": "https://plus.google.com/u/1/101937382629552413561/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/rpufky.jpg",
	   "user_id": "gooio2012/2240",
	   "speaker_id": "gooio2012/315//gooio2012/2240"
	  },
	  {
	   "bio": "Zach is an Internal Technology Resident working in the Techstops to provide support to fellow googlers.",
	   "first_name": "Zach",
	   "last_name": "Szafran",
	   "display_name": "Zach Szafran",
	   "plusone_url": "https://plus.sandbox.google.com/u/0/107435544056561825810/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/zms.jpg",
	   "user_id": "gooio2012/2289",
	   "speaker_id": "gooio2012/315//gooio2012/2289"
	  },
	  {
	   "bio": "James is a resident in Google's Internal Technology Residency Program. He also contributes to software development projects in Corporate Engineering's Support Organization.",
	   "first_name": "James",
	   "last_name": "Meador",
	   "display_name": "James Meador",
	   "plusone_url": "https://plus.google.com/u/1/108102361348560390204/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jmeador.jpg",
	   "user_id": "gooio2012/2290",
	   "speaker_id": "gooio2012/315//gooio2012/2290"
	  },
	  {
	   "bio": "Andrew is a core developer of the Go Programming Language based at Google Sydney. His mission is to teach the world to love Go as much as he does.",
	   "first_name": "Andrew",
	   "last_name": "Gerrand",
	   "display_name": "Andrew Gerrand",
	   "plusone_url": "https://plus.google.com/106356964679457436995/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/adg.jpg",
	   "user_id": "gooio2012/2030",
	   "speaker_id": "gooio2012/320//gooio2012/2030"
	  },
	  {
	   "bio": "Rob Pike is a Distinguished Engineer at Google. He works on distributed systems, data mining, programming languages, and software development tools. More recently he was a co-designer of the Go programming language.",
	   "first_name": "Rob",
	   "last_name": "Pike",
	   "display_name": "Rob Pike",
	   "plusone_url": "https://plus.google.com/101960720994009339267/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/r.jpg",
	   "user_id": "gooio2012/2105",
	   "speaker_id": "gooio2012/321//gooio2012/2105"
	  },
	  {
	   "bio": "Mayuresh is a Sr Product Manager on the Google Commerce team where he leads efforts on Merchant Center, Content API and Google Product Search Policy. Previously, he was a product manager for Chrome.",
	   "first_name": "Mayuresh",
	   "last_name": "Saoji",
	   "display_name": "Mayuresh Saoji",
	   "plusone_url": "https://plus.google.com/u/0/111156187197447263380/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mayuresh.jpg",
	   "user_id": "gooio2012/2138",
	   "speaker_id": "gooio2012/400//gooio2012/2138"
	  },
	  {
	   "bio": "Thomas is the Tech Lead for the Content API for Shopping. He joined Google in 2006, works in the Zurich office, and has been involved in various Shopping projects for more than 3 years.",
	   "first_name": "Thomas",
	   "last_name": "Kotzmann",
	   "display_name": "Thomas Kotzmann",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kotzmann.jpg",
	   "user_id": "gooio2012/2116",
	   "speaker_id": "gooio2012/401//gooio2012/2116"
	  },
	  {
	   "bio": "Claudia is a software engineer for Google Merchant Center based in Zurich, Switzerland. In the past few years, she worked on various merchants-related projects.",
	   "first_name": "Claudia",
	   "last_name": "Ciorascu",
	   "display_name": "Claudia Ciorascu",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/claudella.jpg",
	   "user_id": "gooio2012/2244",
	   "speaker_id": "gooio2012/401//gooio2012/2244"
	  },
	  {
	   "bio": "Joel is a Software Engineer on the Google Wallet team. More specifically, he is focused on simplifying payments integration for developers as well as increasing buyer conversion.",
	   "first_name": "Joel",
	   "last_name": "Leitch",
	   "display_name": "Joel Leitch",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jleitch.jpg",
	   "user_id": "gooio2012/2294",
	   "speaker_id": "gooio2012/402//gooio2012/2294"
	  },
	  {
	   "bio": "Dan joined Google in 2010, and is a Software Engineer working on Google's web-based In-App Payments product.",
	   "first_name": "Dan",
	   "last_name": "Zink",
	   "display_name": "Dan Zink",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/zink.jpg",
	   "user_id": "gooio2012/2314",
	   "speaker_id": "gooio2012/402//gooio2012/2314"
	  },
	  {
	   "bio": "Pali is the Product Manager of Google Wallet for Digital Goods",
	   "first_name": "Pali",
	   "last_name": "Bhat",
	   "display_name": "Pali Bhat",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/pali.jpg",
	   "user_id": "gooio2012/2315",
	   "speaker_id": "gooio2012/402//gooio2012/2315"
	  },
	  {
	   "bio": "Peter is responsible for product management for payments at Google. In this role, Peter works on several different business areas, among them Google Wallet for consumers, and the back-end billing and payments services used  for things like AdWords and AdSense. Prior to joining Google in 2011, Peter was chief product officer at Yodlee and developed solutions for personal finance and payments at many of the largest banks in the USA. \n\nPeter has an MBA from the University of Maryland, College Park.",
	   "first_name": "Peter",
	   "last_name": "Hazlehurst",
	   "user_id": "gooio2012/2364",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/phazlehurst.jpg",
	   "display_name": "Peter Hazlehurst",
	   "speaker_id": "gooio2012/404//gooio2012/2364"
	  },
	  {
	   "bio": "Shaun is a software engineer for the Google Affiliate Network.  He has been working for Google Chicago since 2010.  Prior to Google, he was a server engineer for Electronic Arts massively multiplayer online studio.",
	   "first_name": "Shaun",
	   "last_name": "Cox",
	   "display_name": "Shaun Cox",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/shauncox.jpg",
	   "user_id": "gooio2012/2141",
	   "speaker_id": "gooio2012/500//gooio2012/2141"
	  },
	  {
	   "bio": "Ali is a product manager on the Google Affiliate Network team. In his 5 years at Google, he has also worked on Google Code, App Inventor for Android, Google Code Search, and Ajax APIs.",
	   "first_name": "Ali",
	   "last_name": "Pasha",
	   "display_name": "Ali Pasha",
	   "plusone_url": "https://plus.google.com/116940305523653374313/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/apasha.jpg",
	   "user_id": "gooio2012/2144",
	   "speaker_id": "gooio2012/500//gooio2012/2144"
	  },
	  {
	   "bio": "Founder of Digg, Milk, Co-founder of Revision 3, and Pownce. Product Manager at Google. Angel investor.",
	   "first_name": "Kevin",
	   "last_name": "Rose",
	   "display_name": "Kevin Rose",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/kevinrose.jpg",
	   "user_id": "gooio2012/2325",
	   "speaker_id": "gooio2012/502//gooio2012/2325"
	  },
	  {
	   "bio": "Co-founder of Wildfire Communications and Android. Partner at Google Ventures",
	   "first_name": "Rich",
	   "last_name": "Miner",
	   "display_name": "Rich Miner",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/miner.jpg",
	   "user_id": "gooio2012/2326",
	   "speaker_id": "gooio2012/502//gooio2012/2326"
	  },
	  {
	   "bio": "Naval is an entrepreneur and angel investor, a co-author of Venture Hacks, and a co-maintainer of AngelList. Previously, he was a co-founder at Genoa Corp, Epinions.com, and Vast.com",
	   "first_name": "Naval",
	   "last_name": "Ravikant",
	   "display_name": "Naval Ravikant",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "user_id": "gooio2012/2327",
	   "speaker_id": "gooio2012/502//gooio2012/2327"
	  },
	  {
	   "bio": "Raised in E. Africa, Erik is a technologist & blogger living in Nairobi. He co-founded Ushahidi, a free & open source platform for crowdsourcing information and built the iHub, Nairobi's innovation hub.",
	   "first_name": "Erik",
	   "last_name": "Hersman",
	   "display_name": "Erik Hersman",
	   "plusone_url": "https://plus.google.com/u/0/112471890137873269126/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/Erik-Hersman-Pic-100px.png",
	   "user_id": "gooio2012/2384",
	   "speaker_id": "gooio2012/503//gooio2012/2384"
	  },
	  {
	   "bio": "Eden Shochat is a geek & early stage investor with Genesis. He also started The Junction, a co-working & community. He also co-founded face.com, Aternity, and Delavenne, an analytics-based hedge fund.",
	   "first_name": "Eden",
	   "last_name": "Shochat",
	   "display_name": "Eden Shochat",
	   "plusone_url": "https://plus.google.com/u/2/115210705386620302223/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/EdenPicture.png",
	   "user_id": "gooio2012/2385",
	   "speaker_id": "gooio2012/503//gooio2012/2385"
	  },
	  {
	   "bio": "Jon Bradford loves to help start-ups and their founders achieve their true potential.  Over the last 2 years, Jon has helped to start 12 accelerators from Montreal to Moscow.",
	   "first_name": "Jon",
	   "last_name": "Bradford",
	   "display_name": "Jon Bradford",
	   "plusone_url": "https://plus.google.com/u/0/109457467881600709588/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/Jon-Bradford.jpeg",
	   "user_id": "gooio2012/2386",
	   "speaker_id": "gooio2012/503//gooio2012/2386"
	  },
	  {
	   "bio": "Jeffrey Paine is the founding partner of Golden Gate Ventures, an early stage technology incubator based in Singapore with focus on Southeast Asia. He also manages Founder Institute in Singapore.",
	   "first_name": "Jeffery",
	   "last_name": "Paine",
	   "user_id": "gooio2012/2387",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jeffreypaine.jpg",
	   "display_name": "Jeffery Paine",
	   "speaker_id": "gooio2012/503//gooio2012/2387"
	  },
	  {
	   "bio": "Jehan Ara is the President of the Pakistan Software Houses Association for IT & ITES. She an entrepreneur, social activist and strong proponent of technology to empower and enable communities.",
	   "first_name": "Jehan",
	   "last_name": "Ara",
	   "user_id": "gooio2012/2388",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/Jehan_smiling_medium (1).jpg",
	   "display_name": "Jehan Ara",
	   "speaker_id": "gooio2012/503//gooio2012/2388"
	  },
	  {
	   "bio": "Dror is head of product for YouTube Creators & Curators. He joined Google in 2005, has been involved in many advertising and commerce projects, including leading the AdSense for Search product.",
	   "first_name": "Dror",
	   "last_name": "Shimshowitz",
	   "display_name": "Dror Shimshowitz",
	   "plusone_url": "https://plus.google.com/u/1/107472603345371697632/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dror.jpg",
	   "user_id": "gooio2012/2117",
	   "speaker_id": "gooio2012/504//gooio2012/2117"
	  },
	  {
	   "bio": "A.J. joined YouTube in 2010 after finishing her MBA at Harvard Business School. As the product manager for YouTube channels her mission is to make YouTube channels the video programming platform of the future.",
	   "first_name": "A.J.",
	   "last_name": "Crane",
	   "display_name": "A.J. Crane",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ajcrane.jpg",
	   "user_id": "gooio2012/2167",
	   "speaker_id": "gooio2012/504//gooio2012/2167"
	  },
	  {
	   "bio": "Brendan is an engineer working on the Google+ team in Mountain View. He has eight years experience coding in JavaScript and four at Google where he has worked on both UI and JS infrastructure.",
	   "first_name": "Brendan",
	   "last_name": "O'Brien",
	   "display_name": "Brendan O'Brien",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/obrien.jpg",
	   "user_id": "gooio2012/2246",
	   "speaker_id": "gooio2012/600//gooio2012/2246"
	  },
	  {
	   "bio": "Satish Kambala is a Staff Engineer at Google working on tools for measuring the web speed. He is passionate about speed and helps in making the web faster. He graduated from NIT Trichy, India and joined Google in 2006.",
	   "first_name": "Satish",
	   "last_name": "Kambala",
	   "display_name": "Satish Kambala",
	   "plusone_url": "https://plus.google.com/u/0/107278728723464127358/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/satishk.jpg",
	   "user_id": "gooio2012/2104",
	   "speaker_id": "gooio2012/601//gooio2012/2104"
	  },
	  {
	   "bio": "Arvind is a Director of Engineering at Google and works on making Google and the Internet fast. He also helped establish and chairs the W3C’s Web Performance Working Group.",
	   "first_name": "Arvind",
	   "last_name": "Jain",
	   "display_name": "Arvind Jain",
	   "plusone_url": "https://plus.google.com/u/1/104756073245348118336/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/arvind.jpg",
	   "user_id": "gooio2012/2147",
	   "speaker_id": "gooio2012/601//gooio2012/2147"
	  },
	  {
	   "bio": "Yinnon is a Software Engineer for Google Chart Tools, providing an extensive, consistent and beautiful set of interactive visualizations, accessed through a clean API. Before joining Google, Yinnon developed various static analysis algorithms for identifying web application security flows and for identifying the impact of configuration changes in SAP applications.",
	   "first_name": "Yinnon",
	   "last_name": "Haviv",
	   "display_name": "Yinnon Haviv",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/yinnon.jpg",
	   "user_id": "gooio2012/2101",
	   "speaker_id": "gooio2012/602//gooio2012/2101"
	  },
	  {
	   "bio": "Michael Fink joined Google Research at 2005. Since then Michael initiated several media based projects including YouTube's Interactive Video Annotations, which enables embedding hyperlinks onto objects in YouTube videos. In the last three years, Michael is leading the Google Trends and Chart Tools teams. In his 20% time Michael originated the new Center for Design, Media and Technology in the Jerusalem Leper Colony.",
	   "first_name": "Michael",
	   "last_name": "Fink",
	   "display_name": "Michael Fink",
	   "plusone_url": "https://plus.google.com/u/0/117791811918465400057",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/fink.jpg",
	   "user_id": "gooio2012/2103",
	   "speaker_id": "gooio2012/602//gooio2012/2103"
	  },
	  {
	   "first_name": "Dani",
	   "last_name": "Bacon",
	   "user_id": "gooio2012/2249",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Dani Bacon",
	   "speaker_id": "gooio2012/602//gooio2012/2249"
	  },
	  {
	   "bio": "Sven joined Google in 2006, between getting his BS from Stanford University and his PhD from UCLA. He currently works on Google's API infrastructure, helping to make Google's APIs stable, fast, and easy to use.",
	   "first_name": "Sven",
	   "last_name": "Mawson",
	   "display_name": "Sven Mawson",
	   "plusone_url": "https://plus.google.com/101784674904725248929",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/sven.jpg",
	   "user_id": "gooio2012/2160",
	   "speaker_id": "gooio2012/605//gooio2012/2160"
	  },
	  {
	   "bio": "Josh is a Product Manager on the Google Drive team.    He is currently focused on the Drive SDK and the Drive Web UI.",
	   "first_name": "Josh",
	   "last_name": "Hudgins",
	   "display_name": "Josh Hudgins",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jhudgins.jpg",
	   "user_id": "gooio2012/2251",
	   "speaker_id": "gooio2012/701//gooio2012/2251"
	  },
	  {
	   "bio": "John is a lead software engineer on the Google Drive APIs team. He believes online collaboration to be rad and has helped with the collaboration features of several Google Docs products.",
	   "first_name": "John",
	   "last_name": "Day-Richter",
	   "display_name": "John Day-Richter",
	   "plusone_url": "https://plus.google.com/105240631134118155844",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/johndayrichter.jpg",
	   "user_id": "gooio2012/2283",
	   "speaker_id": "gooio2012/701//gooio2012/2283"
	  },
	  {
	   "bio": "Nicolas is a Developer Advocate at Google Zurich. He is working on Google Apps and most recently on Google Drive. He loves Web APIs.",
	   "first_name": "Nicolas",
	   "last_name": "Garnier",
	   "display_name": "Nicolas Garnier",
	   "plusone_url": "https://plus.google.com/108635752367054807758",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/nivco.jpg",
	   "user_id": "gooio2012/2048",
	   "speaker_id": "gooio2012/702//gooio2012/2048"
	  },
	  {
	   "bio": "Ali is an engineer in the Developer Relations team working on Google Drive.",
	   "first_name": "Ali",
	   "last_name": "Afshar",
	   "display_name": "Ali Afshar",
	   "plusone_url": "https://plus.google.com/u/0/118327176775959145936/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/afshar.jpg",
	   "user_id": "gooio2012/2169",
	   "speaker_id": "gooio2012/703//gooio2012/2169"
	  },
	  {
	   "bio": "Ivan is a software engineer working on the Google Drive API.",
	   "first_name": "Ivan",
	   "last_name": "Lee",
	   "display_name": "Ivan Lee",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ivanylee.jpg",
	   "user_id": "gooio2012/2282",
	   "speaker_id": "gooio2012/703//gooio2012/2282"
	  },
	  {
	   "bio": "Steve is a Developer Advocate for Google Drive & Google Apps.  He enjoys helping developers find ways to integrate their apps and bring added value to users.",
	   "first_name": "Steve",
	   "last_name": "Bazyl",
	   "display_name": "Steve Bazyl",
	   "plusone_url": "https://plus.google.com/103354693083460731603/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/sbazyl.jpg",
	   "user_id": "gooio2012/2007",
	   "speaker_id": "gooio2012/704//gooio2012/2007"
	  },
	  {
	   "bio": "Mike is a Software Engineer for Google Drive, leveraging his passion for the developer and user experience by working on the Drive APIs. He holds a Ph.D. in CS from the University of Colorado.",
	   "first_name": "Mike",
	   "last_name": "Procopio",
	   "display_name": "Mike Procopio",
	   "plusone_url": "https://plus.google.com/u/0/106387596237285278373/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mprocopio.jpg",
	   "user_id": "gooio2012/2252",
	   "speaker_id": "gooio2012/704//gooio2012/2252"
	  },
	  {
	   "bio": "Alain is an engineer in the Google Drive SDK Developer Relations team.",
	   "first_name": "Alain",
	   "last_name": "Vongsouvanh",
	   "display_name": "Alain Vongsouvanh",
	   "plusone_url": "https://plus.google.com/110487324451850883514/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/alainv.jpg",
	   "user_id": "gooio2012/2253",
	   "speaker_id": "gooio2012/705//gooio2012/2253"
	  },
	  {
	   "bio": "Drew joined Google in 2007 and is now working as an engineer and manager on the Google Apps Script Team.",
	   "first_name": "Drew",
	   "last_name": "Csillag",
	   "display_name": "Drew Csillag",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dcsillag.jpg",
	   "user_id": "gooio2012/2171",
	   "speaker_id": "gooio2012/706//gooio2012/2171"
	  },
	  {
	   "bio": "Corey is a software engineer on the Google Script team, based in New York. He has previously worked on Similar Shape search for 3DWarehouse, and as a robotics researcher before joining Google.",
	   "first_name": "Corey",
	   "last_name": "Goldfeder",
	   "display_name": "Corey Goldfeder",
	   "plusone_url": "https://plus.google.com/u/0/111098936564493417830/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/cgoldfeder.jpg",
	   "user_id": "gooio2012/2223",
	   "speaker_id": "gooio2012/707//gooio2012/2223"
	  },
	  {
	   "bio": "Saurabh is a Developer Programs Engineer at Google. He works closely with Google Apps Script developers to help them extend Google Apps. Over the last 10 years, he has worked in the financial services industry in different roles. His current mission is to bring automation and collaboration to Google Apps users.",
	   "first_name": "Saurabh",
	   "last_name": "Gupta",
	   "display_name": "Saurabh Gupta",
	   "plusone_url": "https://plus.google.com/105831704374179338116",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/sagupta.jpg",
	   "user_id": "gooio2012/2025",
	   "speaker_id": "gooio2012/708//gooio2012/2025"
	  },
	  {
	   "bio": "Julia Ferraioli is a Developer Advocate working on the Google+ platform. In addition to loving everything social, she is passionate about mobile, data visualization, and accessibility, and knitting.",
	   "first_name": "Julia",
	   "last_name": "Ferraioli",
	   "display_name": "Julia Ferraioli",
	   "plusone_url": "https://plus.google.com/u/0/112612962093061557999",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/juliaferraioli.jpg",
	   "user_id": "gooio2012/2088",
	   "speaker_id": "gooio2012/800//gooio2012/2088"
	  },
	  {
	   "bio": "Jonathan is a Developer Advocate working on Google+. In a former life, Jonathan was a Product Manager for eCommerce and Social Game platforms. He holds a Bachelors degree in Computer Science & Business Administration. Jonathan loves building apps that push the limits of his Lingua Franca, JavaScript.",
	   "first_name": "Jonathan",
	   "last_name": "Beri",
	   "display_name": "Jonathan Beri",
	   "plusone_url": "https://plus.google.com/108249232416813189685",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jberi.jpg",
	   "user_id": "gooio2012/2046",
	   "speaker_id": "gooio2012/801//gooio2012/2046"
	  },
	  {
	   "bio": "Amit Fulay is the Product Manager for Google+ Hangouts. He joined Google in 2010 and leads the development of the real-time communications platform",
	   "first_name": "Amit",
	   "last_name": "Fulay",
	   "display_name": "Amit Fulay",
	   "plusone_url": "https://plus.google.com/u/1/116916940622399669871/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/afulay.jpg",
	   "user_id": "gooio2012/2255",
	   "speaker_id": "gooio2012/801//gooio2012/2255"
	  },
	  {
	   "bio": "Malte is a software engineer for the Google+ platform. He likes programming a lot (surprise!) and generally enjoys creating things. He is known to put JavaScript stickers on everything in his range and curates JSConf EU in Berlin.",
	   "first_name": "Malte",
	   "last_name": "Ubl",
	   "display_name": "Malte Ubl",
	   "plusone_url": "https://plus.google.com/116910304844117268718/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/malteubl.jpg",
	   "user_id": "gooio2012/2142",
	   "speaker_id": "gooio2012/802//gooio2012/2142"
	  },
	  {
	   "bio": "John is a software engineer leading the team responsible for delivering Google+ APIs to the browser. He is passionate about doing more with less.",
	   "first_name": "John",
	   "last_name": "Hjelmstad",
	   "display_name": "John Hjelmstad",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/fargo.jpg",
	   "user_id": "gooio2012/2256",
	   "speaker_id": "gooio2012/802//gooio2012/2256"
	  },
	  {
	   "bio": "Ade Oshineye is a Developer Advocate at Google working on the Google+ project. He'd love to show you how social protocols, technologies and features can make your products better. He's also the co-author of Apprenticeship Patterns.",
	   "first_name": "Ade",
	   "last_name": "Oshineye",
	   "display_name": "Ade Oshineye",
	   "plusone_url": "https://plus.google.com/105037104815911535953",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/ade.jpg",
	   "user_id": "gooio2012/2002",
	   "speaker_id": "gooio2012/803//gooio2012/2002"
	  },
	  {
	   "first_name": "Julie",
	   "last_name": "Farago",
	   "user_id": "gooio2012/2257",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Julie Farago",
	   "speaker_id": "gooio2012/803//gooio2012/2257"
	  },
	  {
	   "first_name": "Daniel",
	   "last_name": "Dulitz",
	   "user_id": "gooio2012/2259",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Daniel Dulitz",
	   "speaker_id": "gooio2012/806//gooio2012/2259"
	  },
	  {
	   "bio": "Susannah is the tech lead for the JavaScript Maps API team in Sydney. Prior to moving to Australia, she worked on Local Search in New York and Google Desktop in Mountain View.",
	   "first_name": "Susannah",
	   "last_name": "Raub",
	   "display_name": "Susannah Raub",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/sraub.jpg",
	   "user_id": "gooio2012/2260",
	   "speaker_id": "gooio2012/900//gooio2012/2260"
	  },
	  {
	   "first_name": "Jez",
	   "last_name": "Fletcher",
	   "user_id": "gooio2012/2262",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Jez Fletcher",
	   "speaker_id": "gooio2012/900//gooio2012/2262"
	  },
	  {
	   "bio": "Scott is an engineer on the map tile serving team in Seattle. Some highlights from his 3 years at Google are Styled Maps in the Maps API and the Bicycling layer.",
	   "first_name": "Scott",
	   "last_name": "Shawcroft",
	   "display_name": "Scott Shawcroft",
	   "plusone_url": "http://plus.google.com/100227629906238220473/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/shawcroft.jpg",
	   "user_id": "gooio2012/2235",
	   "speaker_id": "gooio2012/901//gooio2012/2235"
	  },
	  {
	   "bio": "Jonah is the lead user experience designer for Google Maps.  Since joining Google in 2007 he has led the design of transit, directions, layers, map tile styling, and more.",
	   "first_name": "Jonah",
	   "last_name": "Jones",
	   "display_name": "Jonah Jones",
	   "plusone_url": "https://plus.google.com/104983141122260644080/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jonah.jpg",
	   "user_id": "gooio2012/2313",
	   "speaker_id": "gooio2012/901//gooio2012/2313"
	  },
	  {
	   "bio": "Enoch is a software engineer on the Google Maps API team based in Sydney, working on the v3 JavaScript API.",
	   "first_name": "Enoch",
	   "last_name": "Lau",
	   "display_name": "Enoch Lau",
	   "plusone_url": "https://plus.google.com/108655796004103219305/posts",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/enochlau.jpg",
	   "user_id": "gooio2012/2143",
	   "speaker_id": "gooio2012/903//gooio2012/2143"
	  },
	  {
	   "bio": "Brendan is an engineer on the Geo Developer Relations team. Prior to joining Google, he split his career between teaching math and helping advance the state of the web. Now he gets to do both.",
	   "first_name": "Brendan",
	   "last_name": "Kenny",
	   "display_name": "Brendan Kenny",
	   "plusone_url": "https://plus.google.com/114280001108380956660/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/bckenny.jpg",
	   "user_id": "gooio2012/2261",
	   "speaker_id": "gooio2012/903//gooio2012/2261"
	  },
	  {
	   "bio": "Dylan is a Product Manager at Google responsible for ensuring that Google's business versions of its popular consumer mapping applications continue evolving to meet the particular business needs of the enterprise.",
	   "first_name": "Dylan",
	   "last_name": "Lorimer",
	   "display_name": "Dylan Lorimer",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://g0.gstatic.com/ig/images/silhouette.jpg",
	   "user_id": "gooio2012/2108",
	   "speaker_id": "gooio2012/904//gooio2012/2108"
	  },
	  {
	   "first_name": "Brian",
	   "last_name": "McClendon",
	   "user_id": "gooio2012/2264",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "display_name": "Brian McClendon",
	   "speaker_id": "gooio2012/904//gooio2012/2264"
	  },
	  {
	   "bio": "Thor is the Product Manager for the Google Maps and Places APIs based in Sydney. He is desperately hoping that the Metreon Super Duper Burger will open in time for I/O.",
	   "first_name": "Thor",
	   "last_name": "Mitchell",
	   "display_name": "Thor Mitchell",
	   "plusone_url": "https://plus.google.com/116328570070842584752/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/thor.jpg",
	   "user_id": "gooio2012/2265",
	   "speaker_id": "gooio2012/904//gooio2012/2265"
	  },
	  {
	   "bio": "s",
	   "first_name": "Nabil",
	   "last_name": "Naghdy",
	   "display_name": "Nabil Naghdy",
	   "plusone_url": "https://plus.google.com/u/0/116224527477870739497/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/naghdy.jpg",
	   "user_id": "gooio2012/2146",
	   "speaker_id": "gooio2012/905//gooio2012/2146"
	  },
	  {
	   "bio": "Mano is the lead Developer Advocate for Google’s Geo APIs. He has travelled the world helping developers use Google’s mapping technologies to communicate their message to the world.",
	   "first_name": "Mano",
	   "last_name": "Marks",
	   "display_name": "Mano Marks",
	   "plusone_url": "http://manomarks.net/+",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/mmarks.jpg",
	   "user_id": "gooio2012/2033",
	   "speaker_id": "gooio2012/906//gooio2012/2033"
	  },
	  {
	   "bio": "Sean Maday is a geospatial engineer at Google. He served as an Air Force intelligence officer from 2005 to 2010, and formerly worked for a research and development lab at the U.S. Air Force Academy.",
	   "first_name": "Sean",
	   "last_name": "Maday",
	   "display_name": "Sean Maday",
	   "plusone_url": "https://plus.google.com/115193389128038683849/",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/smaday.jpg",
	   "user_id": "gooio2012/2266",
	   "speaker_id": "gooio2012/906//gooio2012/2266"
	  },
	  {
	   "bio": "Andrés leads the Google Maps Developer Relations team.  He enjoys helping and working with developers who build valuable apps with Google's mapping APIs.",
	   "first_name": "Andrés",
	   "last_name": "Ferraté",
	   "display_name": "Andrés Ferraté",
	   "plusone_url": "https://plus.google.com/u/0/113734550334076793987/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/andresf.jpg",
	   "user_id": "gooio2012/2009",
	   "speaker_id": "gooio2012/907//gooio2012/2009"
	  },
	  {
	   "bio": "Marcelo is tech lead for the Places API team in Sydney. In past lives, Marcelo have worked on technology for massively multiplayer games and scientific visualization software.",
	   "first_name": "Marcelo",
	   "last_name": "Camelo",
	   "display_name": "Marcelo Camelo",
	   "plusone_url": "https://plus.sandbox.google.com/u/0/103152505287187486368/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/camelo.jpg",
	   "user_id": "gooio2012/2267",
	   "speaker_id": "gooio2012/907//gooio2012/2267"
	  },
	  {
	   "bio": "Dave has been a software engineer on the Google Maps API since 2007. He's dabbled in Mapplets and Maps Labs, and is currently leading a team in extending the Maps APIs for businesses.",
	   "first_name": "Dave",
	   "last_name": "Day",
	   "display_name": "Dave Day",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/davidday.jpg",
	   "user_id": "gooio2012/2165",
	   "speaker_id": "gooio2012/908//gooio2012/2165"
	  },
	  {
	   "bio": "David is a software engineer working on Maps-based applications for businesses. Since joining Google in 2008 he has also worked on Docs and Hangouts.",
	   "first_name": "David",
	   "last_name": "Owens",
	   "display_name": "David Owens",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/dowens.jpg",
	   "user_id": "gooio2012/2268",
	   "speaker_id": "gooio2012/908//gooio2012/2268"
	  },
	  {
	   "bio": "Sean Askay is a Developer Advocate on the Google Earth Outreach team, aimed at helping non-profits use mapping technology. He is drives feature development and language improvements for KML.",
	   "first_name": "Sean",
	   "last_name": "Askay",
	   "display_name": "Sean Askay",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/alchemist.jpg",
	   "user_id": "gooio2012/2125",
	   "speaker_id": "gooio2012/909//gooio2012/2125"
	  },
	  {
	   "first_name": "James",
	   "last_name": "McGill",
	   "user_id": "gooio2012/2269",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/jmcgill.jpg",
	   "display_name": "James McGill",
	   "speaker_id": "gooio2012/909//gooio2012/2269"
	  },
	  {
	   "bio": "Peter is Product Manager for Google Earth and is responsible for the Google Earth API, as well as the desktop and mobile Google Earth clients.  He has been at Google since 2006.",
	   "first_name": "Peter",
	   "last_name": "Birch",
	   "display_name": "Peter Birch",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "user_id": "gooio2012/2270",
	   "speaker_id": "gooio2012/909//gooio2012/2270"
	  },
	  {
	   "bio": "Andrew is a product manager on Google Maps based in Sydney.  Since joining Google in 2006 he has worked on a number of different Maps products including ads and mobile APIs.",
	   "first_name": "Andrew",
	   "last_name": "Foster",
	   "display_name": "Andrew Foster",
	   "plusone_url": "https://plus.google.com/104053532464087688431",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/andrewf.jpg",
	   "user_id": "gooio2012/2312",
	   "speaker_id": "gooio2012/909//gooio2012/2312"
	  },
	  {
	   "bio": "David is a Tech Lead Manager on a number of Google Maps API products based in Sydney. He has worked on a number of roles in Google including Architect and Tech Lead Manager of Google Wave Client.",
	   "first_name": "David",
	   "last_name": "Wang",
	   "display_name": "David Wang",
	   "plusone_url": "https://plus.google.com/111395306401981598462/about",
	   "thumbnail_url": "http://commondatastorage.googleapis.com/io2012/headshots/zdwang.jpg",
	   "user_id": "gooio2012/2324",
	   "speaker_id": "gooio2012/909//gooio2012/2324"
	  }
	];

	sortSpeakers();
	regenerateSpeakers();
});
