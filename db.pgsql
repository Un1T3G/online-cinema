--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: actors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actors (
    id integer NOT NULL,
    name character varying NOT NULL,
    photo character varying NOT NULL,
    slug character varying NOT NULL
);


ALTER TABLE public.actors OWNER TO postgres;

--
-- Name: actors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.actors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.actors_id_seq OWNER TO postgres;

--
-- Name: actors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.actors_id_seq OWNED BY public.actors.id;


--
-- Name: genres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.genres (
    id integer NOT NULL,
    name character varying NOT NULL,
    slug character varying NOT NULL,
    description character varying NOT NULL,
    icon character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.genres OWNER TO postgres;

--
-- Name: genres_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.genres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genres_id_seq OWNER TO postgres;

--
-- Name: genres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.genres_id_seq OWNED BY public.genres.id;


--
-- Name: movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    slug character varying NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    poster character varying NOT NULL,
    "bigPoster" character varying NOT NULL,
    parameters jsonb NOT NULL,
    rating integer DEFAULT 4 NOT NULL,
    "countOpened" integer DEFAULT 0 NOT NULL,
    "videoUrl" character varying NOT NULL,
    "isSendTelegram" boolean DEFAULT false NOT NULL
);


ALTER TABLE public.movies OWNER TO postgres;

--
-- Name: movies_actors_actors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies_actors_actors (
    "moviesId" integer NOT NULL,
    "actorsId" integer NOT NULL
);


ALTER TABLE public.movies_actors_actors OWNER TO postgres;

--
-- Name: movies_genres_genres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies_genres_genres (
    "moviesId" integer NOT NULL,
    "genresId" integer NOT NULL
);


ALTER TABLE public.movies_genres_genres OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movies_id_seq OWNER TO postgres;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: movies_user_favorites_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movies_user_favorites_users (
    "moviesId" integer NOT NULL,
    "usersId" integer NOT NULL
);


ALTER TABLE public.movies_user_favorites_users OWNER TO postgres;

--
-- Name: ratings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ratings (
    id integer NOT NULL,
    value integer NOT NULL,
    "userId" integer NOT NULL,
    "movieId" integer NOT NULL
);


ALTER TABLE public.ratings OWNER TO postgres;

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ratings_id_seq OWNER TO postgres;

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "isAdmin" boolean DEFAULT false NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_favorite_movies_movies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_favorite_movies_movies (
    "usersId" integer NOT NULL,
    "moviesId" integer NOT NULL
);


ALTER TABLE public.users_favorite_movies_movies OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: actors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actors ALTER COLUMN id SET DEFAULT nextval('public.actors_id_seq'::regclass);


--
-- Name: genres id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres ALTER COLUMN id SET DEFAULT nextval('public.genres_id_seq'::regclass);


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Name: ratings id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: actors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actors (id, name, photo, slug) FROM stdin;
1	Charlize	/uploads/actors/charlize.jpeg	charlize
2	Donnie	/uploads/actors/donnie.jpg	donnie
3	Holland	/uploads/actors/holland.jpg	holland
4	Keanu	/uploads/actors/keanu.jpg	keanu
5	Laurence	/uploads/actors/laurence.jpeg	laurence
6	Martin	/uploads/actors/martin.jpeg	martin
7	Sam	/uploads/actors/sam.jpg	sam
8	Simu liu	/uploads/actors/simu-liu.jpg	simu-liu
9	Stephanie	/uploads/actors/stephanie.jpg	stephanie
10	Tom hardy	/uploads/actors/tom-hardy.jpg	tom-hardy
11	Uncle	/uploads/actors/uncle.jpg	uncle
12	Will	/uploads/actors/will.jpg	will
\.


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.genres (id, name, slug, description, icon, "createdAt", "updatedAt") FROM stdin;
3	Adventure	adventure	<p>Adventure is a genre that revolves around exciting and daring experiences. It commonly involves protagonists embarking on a journey or quest, overcoming challenges, and exploring new and unfamiliar territories. Adventure stories typically evoke a sense of thrill, discovery, and personal growth.</p>	MdBugReport	2023-08-10 09:07:18.834677	2023-08-10 09:10:56.117
4	Action	action	<p>Action is a genre that emphasizes high-energy physical feats, fast-paced sequences, and thrilling stunts. It often includes intense combat scenes, chases, and explosions. Action movies and books are known for their adrenaline-pumping moments, charismatic heroes, and gripping storylines.</p>	MdOutlineSportsKabaddi	2023-08-10 09:11:08.559865	2023-08-10 09:14:06.752
5	Comedy	comedy	<p>Comedy is a genre that aims to entertain and amuse the audience through humorous situations, witty dialogue, and comedic performances. It often includes lighthearted storylines, comedic timing, and funny characters. Comedy movies and books provide laughter and comic relief, lifting the spirits of the viewers.</p>	MdOutlineSentimentSatisfied	2023-08-10 09:14:15.487781	2023-08-10 09:15:06.791
6	Fantasy	fantasy	<p>Fantasy is a genre that features imaginative and magical elements, often set in fictional worlds. It involves supernatural creatures, mythical beings, and enchanting settings. Fantasy stories allow readers and viewers to escape reality and delve into extraordinary realms filled with adventure, wonder, and epic battles.</p>	MdHub	2023-08-10 09:15:13.701779	2023-08-10 09:17:19.141
1	Horror	horror	<p>Horror is a genre that aims to evoke feelings of fear, terror, and suspense in the audience. It often features supernatural elements, monsters, or psychological themes that create a sense of unease. Horror movies and books are known for their intense atmosphere, jump scares, and thrilling plotlines.</p>	MdAccessibility	2023-08-10 09:02:41.58009	2023-10-21 17:42:41.389
\.


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies (id, slug, title, description, poster, "bigPoster", parameters, rating, "countOpened", "videoUrl", "isSendTelegram") FROM stdin;
11	mad-max	Mad Max	<p>An adrenaline-fueled post-apocalyptic action film set in a dystopian future. Follow Max Rockatansky, a former police officer, as he navigates a world dominated by violent gangs. In his quest for survival, Max forms an unlikely alliance with Furiosa, a fierce warrior, leading to a high-octane chase across the desert.</p>	/uploads/movies/mad-max-small.jpg	/uploads/movies/mad-max.jpg	{"year": 2015, "country": "Australia", "duration": 120}	4	0	/uploads/movies/mad-max.mp4	f
15	red-dog	Red Dog	<p>A heartwarming tale of a dog's loyalty and the bond it forms with its owner. Set in the Australian outback, Red Dog embarks on an incredible journey, touching the lives of many people along the way.</p>	/uploads/movies/red-dog-small.jpg	/uploads/movies/red-dog.jpg	{"year": 2011, "country": "Australia", "duration": 92}	4	0	/uploads/movies/red-dog.mp4	f
16	avatar	Avatar	<p>A groundbreaking science fiction film set in the lush world of Pandora. Follow the journey of Jake Sully, a paralyzed marine who becomes part of the Avatar Program, allowing him to inhabit a Na'vi body. As he immerses himself in their culture, he faces a choice between loyalty and the pursuit of a greater cause.</p>	/uploads/movies/avatar-small.jpg	/uploads/movies/avatar.jpg	{"year": 2009, "country": "United States", "duration": 162}	4	0	/uploads/movies/avatar.mp4	f
17	spider-man-no-way-home	Spider-Man: No Way Home	<p[is set to be the most anticipated superhero film of the year. As Peter Parker's identity as Spider-Man is revealed to the world, he seeks the help of Doctor Strange to undo the damage. In a multiverse-spanning adventure, Spider-Man must confront familiar foes from different dimensions and make sacrifices to protect his loved ones.</p>	/uploads/movies/spider-man-no-way-home-small.jpg	/uploads/movies/spider-man-no-way-home.jpg	{"year": 2021, "country": "United States", "duration": 148}	4	0	/uploads/movies/spider-man-no-way-home.mp4	f
12	ip-man	Ip Man	<p>A biographical martial arts film based on the life of Ip Man, a legendary Wing Chun master. Set during the tumultuous periodof the Sino-Japanese War, Ip Man showcases his skill and determination as he defends his community against oppressive forces. With remarkable fight choreography and a compelling story, the film is a tribute to the resilience of the human spirit.</p>	/uploads/movies/ip-man-small.jpg	/uploads/movies/ip-man.jpg	{"year": 2008, "country": "Hong Kong", "duration": 106}	4	3	/uploads/movies/ip-man.mp4	f
8	i-am-legend	I Am Legend 	<p>A post-apocalyptic thriller that follows the story of Robert Neville, the last surviving human in New York City. As a deadly virus decimates the population and turns people into bloodthirsty mutants, Neville must navigate the desolate cityscape and find a cure. Will he be able to save humanity or succumb to the darkness?</p>	/uploads/movies/i-am-legend-small.jpg	/uploads/movies/i-am-legend.jpg	{"year": 2007, "country": "United States", "duration": 101}	4	7	/uploads/movies/i-am-legend.mp4	f
13	john-wick	John Wick	<p>A thrilling action film that follows the story of John Wick, a retired hitman who seeks vengeance after the death of his beloved dog. As he unleashes a relentless pursuit against those who wronged him, Wick proves to be a force to be reckoned with. With its stylish action sequences and intense atmosphere, John Wick is an adrenaline-pumping ride.</p>	/uploads/movies/john-wick-small.jpg	/uploads/movies/john-wick.jpg	{"year": 2014, "country": "United States", "duration": 101}	4	1	/uploads/movies/john-wick.mp4	f
7	shang-chi	Shang-Chi	<p>Marvel's Shang-Chi and the Legend of the Ten Rings is an action-packed superhero film that introduces Shang-Chi, a skilled martial artist. After being drawn into the clandestine Ten Rings organization, Shang-Chi must confront his past and embrace his destiny as the wielder of the legendary Ten Rings. With stunning visuals and captivating performances, the film expands the Marvel Cinematic Universe in exciting ways.</p>	/uploads/movies/shang-chi-small.jpg	/uploads/movies/shang-chi.jpg	{"year": 2021, "country": "United States", "duration": 132}	4	2	/uploads/movies/shang-chi.mp4	f
10	encanto	Encanto	<p>A magical musical adventure from Disney Animation Studios. Set in Colombia, Encanto tells the story of the Madrigal family, who are blessed with unique powers. However, when the magic of the Encanto begins to fade, young Mirabel must discover the true magic within herself to save her family and their extraordinary home.</p>	/uploads/movies/encanto-small.jpg	/uploads/movies/encanto.jpg	{"year": 2021, "country": "United States", "duration": 123}	4	10	/uploads/movies/encanto.mp4	f
9	the-hobbit	The Hobbit	<p>An epic fantasy adventure based on J.R.R. Tolkien's novel. Join Bilbo Baggins as he embarks on a perilous journey with a group of dwarves to reclaim their homeland from the fearsome dragon Smaug. Along the way, they encounter magical creatures, treacherous landscapes, and the powerful One Ring, which sets the stage for the events of The Lord of the Rings.</p>	/uploads/movies/the-hobbit-small.jpg	/uploads/movies/the-hobbit.jpg	{"year": 2012, "country": "United States", "duration": 169}	4	9	/uploads/movies/the-hobbit.mp4	f
18	clone	Clone	<p>A small town in Maine is terrorized by a mysterious serial killer who kills children with inhuman cruelty. Torn bodies are found here and there, and sometimes only parts of them. Seven eleven—year-olds: Richie Tozier, Bill Denbrough, Beverly Marsh, Mike Hanlon, Eddie Kaspbrak, Ben Hanscom and Stan Uris face each separately with a mysterious evil - a terrifying monster capable of taking any form. In the film, it appears in the form of a clown called Pennywise, luring children with orange pompoms and balloons.</p>	/uploads/movies/16607995-2168908.jpg	/uploads/movies/16607995-2168908.jpg	{"year": "2013", "country": "United States", "duration": "135"}	4	2	/uploads/movies/It-Trailer_Rus.mp4	f
\.


--
-- Data for Name: movies_actors_actors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies_actors_actors ("moviesId", "actorsId") FROM stdin;
8	10
9	1
9	2
9	10
10	1
10	2
10	10
11	1
11	2
11	10
12	1
12	2
12	10
13	1
13	2
13	10
7	1
7	2
7	10
8	1
8	2
15	1
15	2
15	10
16	1
16	2
16	10
17	1
17	2
17	10
18	1
18	5
18	10
\.


--
-- Data for Name: movies_genres_genres; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies_genres_genres ("moviesId", "genresId") FROM stdin;
8	1
9	1
9	3
9	6
10	3
10	6
11	1
11	3
11	6
12	1
12	3
12	6
13	1
13	3
13	6
7	1
7	3
7	6
8	3
8	6
15	1
15	3
15	6
16	1
16	3
16	6
17	1
17	3
17	6
18	1
18	3
18	6
\.


--
-- Data for Name: movies_user_favorites_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.movies_user_favorites_users ("moviesId", "usersId") FROM stdin;
7	1
9	1
7	5
9	5
10	5
8	5
12	5
13	5
18	5
10	2
8	2
\.


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ratings (id, value, "userId", "movieId") FROM stdin;
1	4	2	13
2	5	2	7
3	4	2	9
4	4	1	10
5	3	1	7
7	3	1	8
6	5	1	9
8	5	1	12
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, "isAdmin", "createdAt", "updatedAt") FROM stdin;
3	user2@gmail.com	$2a$10$Ou0bE011S6eVq8okO7O6gual.c4w4nDujU0ziySmIGzn9LS8v7omq	f	2023-08-20 19:40:05.236011	2023-08-20 19:40:05.236011
4	tessdsdt@gmail.com	$2a$10$pjkLjHQ1mN255BmlhdmSz.V8LNqORJFXLpCp7zvOmt0T9k7a4652G	f	2023-08-20 19:44:42.802989	2023-10-22 09:54:24.181
1	admin@gmai.com	$2a$10$G5jtdn1QlqN2z0ku/aYVwe66xEcedy3oNvNUM3/lBPS31Tw8odvRO	t	2023-08-10 08:50:54.504425	2023-10-22 09:56:03.776
5	sadasdas@fdsfds.com	$2a$10$HhYWROd.xdLUDewSNhjlCe009T/LXmfTC95abJpVd2hsEmdJTO/Y2	f	2023-10-22 13:56:33.404898	2023-10-22 13:56:33.404898
2	user@gmail.com	$2a$10$45Gd4exqAwfvycMko23ituOnJ3tG.dEUvmjeXAbzv68p80qQTNcem	t	2023-08-19 13:35:41.350028	2023-08-19 13:35:41.350028
\.


--
-- Data for Name: users_favorite_movies_movies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_favorite_movies_movies ("usersId", "moviesId") FROM stdin;
\.


--
-- Name: actors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.actors_id_seq', 12, true);


--
-- Name: genres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.genres_id_seq', 6, true);


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.movies_id_seq', 22, true);


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ratings_id_seq', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: ratings PK_0f31425b073219379545ad68ed9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "PK_0f31425b073219379545ad68ed9" PRIMARY KEY (id);


--
-- Name: movies_user_favorites_users PK_331b651e700e2d9673e709c4b72; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_user_favorites_users
    ADD CONSTRAINT "PK_331b651e700e2d9673e709c4b72" PRIMARY KEY ("moviesId", "usersId");


--
-- Name: movies_genres_genres PK_59537f354fd4a79606cc4f3cf1b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_genres_genres
    ADD CONSTRAINT "PK_59537f354fd4a79606cc4f3cf1b" PRIMARY KEY ("moviesId", "genresId");


--
-- Name: genres PK_80ecd718f0f00dde5d77a9be842; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT "PK_80ecd718f0f00dde5d77a9be842" PRIMARY KEY (id);


--
-- Name: movies_actors_actors PK_81ffbd4dab2aab2970909e04035; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_actors_actors
    ADD CONSTRAINT "PK_81ffbd4dab2aab2970909e04035" PRIMARY KEY ("moviesId", "actorsId");


--
-- Name: users_favorite_movies_movies PK_8d3517e11f5a4b13a27606b2a3e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_favorite_movies_movies
    ADD CONSTRAINT "PK_8d3517e11f5a4b13a27606b2a3e" PRIMARY KEY ("usersId", "moviesId");


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: movies PK_c5b2c134e871bfd1c2fe7cc3705; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY (id);


--
-- Name: actors PK_d8608598c2c4f907a78de2ae461; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actors
    ADD CONSTRAINT "PK_d8608598c2c4f907a78de2ae461" PRIMARY KEY (id);


--
-- Name: movies UQ_372b382f5c7b4213dc82a21fd3e; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "UQ_372b382f5c7b4213dc82a21fd3e" UNIQUE ("videoUrl");


--
-- Name: movies UQ_6ed86498aefe0e545548ca31b78; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT "UQ_6ed86498aefe0e545548ca31b78" UNIQUE (slug);


--
-- Name: genres UQ_d1cbe4fe39bdfc77c76e94eada5; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT "UQ_d1cbe4fe39bdfc77c76e94eada5" UNIQUE (slug);


--
-- Name: actors UQ_d728e8d8a38480121d06532aabf; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actors
    ADD CONSTRAINT "UQ_d728e8d8a38480121d06532aabf" UNIQUE (slug);


--
-- Name: IDX_0a7277265ade2088c5c94c73ed; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_0a7277265ade2088c5c94c73ed" ON public.movies_user_favorites_users USING btree ("moviesId");


--
-- Name: IDX_0c4e60e86dff54aa5bf5a63661; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_0c4e60e86dff54aa5bf5a63661" ON public.users_favorite_movies_movies USING btree ("moviesId");


--
-- Name: IDX_172edafb49388f8e292885a74e; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_172edafb49388f8e292885a74e" ON public.users_favorite_movies_movies USING btree ("usersId");


--
-- Name: IDX_3a5c0e3750e17d161976c43f38; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_3a5c0e3750e17d161976c43f38" ON public.movies_user_favorites_users USING btree ("usersId");


--
-- Name: IDX_638b1d6f6929495fa5b87206da; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_638b1d6f6929495fa5b87206da" ON public.movies_actors_actors USING btree ("moviesId");


--
-- Name: IDX_6f9bbef3136f7efc40a5a55886; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_6f9bbef3136f7efc40a5a55886" ON public.movies_actors_actors USING btree ("actorsId");


--
-- Name: IDX_cb43556a8849221b82cd17461c; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_cb43556a8849221b82cd17461c" ON public.movies_genres_genres USING btree ("moviesId");


--
-- Name: IDX_ccf6c10277da37e9fc265863fa; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_ccf6c10277da37e9fc265863fa" ON public.movies_genres_genres USING btree ("genresId");


--
-- Name: movies_user_favorites_users FK_0a7277265ade2088c5c94c73eda; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_user_favorites_users
    ADD CONSTRAINT "FK_0a7277265ade2088c5c94c73eda" FOREIGN KEY ("moviesId") REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users_favorite_movies_movies FK_0c4e60e86dff54aa5bf5a636611; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_favorite_movies_movies
    ADD CONSTRAINT "FK_0c4e60e86dff54aa5bf5a636611" FOREIGN KEY ("moviesId") REFERENCES public.movies(id);


--
-- Name: users_favorite_movies_movies FK_172edafb49388f8e292885a74e2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_favorite_movies_movies
    ADD CONSTRAINT "FK_172edafb49388f8e292885a74e2" FOREIGN KEY ("usersId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movies_user_favorites_users FK_3a5c0e3750e17d161976c43f38b; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_user_favorites_users
    ADD CONSTRAINT "FK_3a5c0e3750e17d161976c43f38b" FOREIGN KEY ("usersId") REFERENCES public.users(id);


--
-- Name: movies_actors_actors FK_638b1d6f6929495fa5b87206daf; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_actors_actors
    ADD CONSTRAINT "FK_638b1d6f6929495fa5b87206daf" FOREIGN KEY ("moviesId") REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movies_actors_actors FK_6f9bbef3136f7efc40a5a55886c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_actors_actors
    ADD CONSTRAINT "FK_6f9bbef3136f7efc40a5a55886c" FOREIGN KEY ("actorsId") REFERENCES public.actors(id);


--
-- Name: movies_genres_genres FK_cb43556a8849221b82cd17461c8; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_genres_genres
    ADD CONSTRAINT "FK_cb43556a8849221b82cd17461c8" FOREIGN KEY ("moviesId") REFERENCES public.movies(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movies_genres_genres FK_ccf6c10277da37e9fc265863fab; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movies_genres_genres
    ADD CONSTRAINT "FK_ccf6c10277da37e9fc265863fab" FOREIGN KEY ("genresId") REFERENCES public.genres(id);


--
-- PostgreSQL database dump complete
--

