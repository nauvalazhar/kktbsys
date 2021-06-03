import {
  Button,
  Container,
  FooterLink,
  FooterTitle,
  HeroFeature,
  IconList,
  IconListItem,
  IllustrationCard,
  IntroCard,
  LangCard,
  Navbar,
  PricingCard,
  SectionBadge,
  SectionDescription,
  SectionTitle,
  SocialLink,
  SquareList,
  SquareListItem,
  TestimonialCard,
} from '@components';
import Head from 'next/head';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import {
  HiOutlineAcademicCap,
  HiOutlineAnnotation,
  HiOutlineHeart,
  HiOutlineLightningBolt,
  HiOutlinePlay,
  HiOutlineShoppingCart,
  HiOutlineTemplate,
  HiOutlineTerminal,
  HiOutlineViewGrid,
} from 'react-icons/hi';
import Slider from 'react-slick';

export default function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <meta name="title" content="KKTBSYS" />
        <meta
          name="description"
          content="Tailwind & Next Mentorship Template"
        />

        <meta property="og:site_name" content="KKTBSYS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karstn.co/socialfeeds" />
        <meta property="og:title" content="KKTBSYS" />
        <meta
          property="og:description"
          content="Tailwind & Next Mentorship Template"
        />
        <meta
          property="og:image"
          content="https://karstn.co/socialfeeds-preview.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://karstn.co/socialfeeds" />
        <meta property="twitter:title" content="KKTBSYS" />
        <meta
          property="twitter:description"
          content="Tailwind & Next Mentorship Template"
        />
        <meta
          property="twitter:image"
          content="https://karstn.co/socialfeeds-preview.png"
        />
        <link rel="canonical" href="http://localhost:3000" />

        <title>KKTBSYS &mdash; Tailwind & Next Mentorship Template</title>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>

      <Navbar
        logo={
          <div className="flex items-center text-base tracking-wide text-white uppercase">
            <img
              src="/logo.png"
              width="40"
              height="40"
              className="mr-4 shadow-lg rounded"
              alt="Logo"
            />
            KKTBSYS
          </div>
        }
        className="bg-gradient-to-br from-blue-400 to-blue-700 xl:bg-none"
        items={[
          { text: 'Kodinger', href: 'https://kodinger.com' },
          { text: 'Array ID', href: 'https://array.id' },
          { text: 'Stisla', href: 'https://getstisla.com' },
          { text: 'Nauval', href: 'https://nauv.al' },
        ]}
        rightButton={{
          variant: 'lightBlue',
          children: 'Daftar Sekarang',
          href: '/',
        }}
      />

      <div className="relative">
        <div className="absolute w-full bottom-0 top-0 bg-gradient-to-br from-blue-400 to-blue-800 z-[-1]" />
        <Container className="lg:pt-64 lg:pb-32 py-40">
          <div className="flex flex-wrap justify-center -mx-8">
            <div className="w-full px-8 text-center lg:w-8/12 xl:w-6/12 xl:text-left">
              <h1 className="text-5xl font-light leading-tight text-white lg:text-6xl -ml-1">
                Menjadi{' '}
                <span className="font-semibold">Front-end Developer</span> Yang{' '}
                <s className="italic text-white/60">Modern</s> Ellitist
              </h1>
              <p className="mx-auto mt-4 text-xl leading-relaxed text-white/80 xl:mx-0 lg:w-9/12">
                Saya ini engineer yang bekerja di big company dan sudah pernah
                implement microservice. Jadi, saya sangat cocok jadi mentor
                kamu!
              </p>

              <div className="flex flex-wrap items-center justify-center mt-10 xl:justify-start">
                <Button
                  variant="solidYellow"
                  className="justify-center w-full mb-2 md:mb-0 md:mr-4 md:w-auto">
                  Pelajari Dulu
                </Button>
                <Button
                  variant="lightOpacity"
                  href="#preview"
                  className="flex items-center justify-center w-full md:w-auto">
                  <HiOutlinePlay className="w-6 h-auto mr-2" />
                  Perkenalan Mentor
                </Button>
              </div>
            </div>
            <div className="w-full px-8 mt-20 xl:w-6/12 xl:mt-0">
              <img
                alt="mentor"
                src="https://images.unsplash.com/photo-1561346745-5db62ae43861?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80"
                className="rounded-lg shadow-lg transform 2xl:scale-125 2xl:translate-x-12"
              />
              <div className="text-xs text-white/40 xl:mt-14 mt-8 text-center xl:text-left">
                Photo by{' '}
                <a href="https://unsplash.com/@next_academy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  NEXT Academy
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/s/photos/mentor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </div>
            </div>
          </div>
          <div className="flex lg:space-x-6 md:mt-40 mt-20 flex-wrap space-y-10 lg:space-y-0">
            <div className="lg:flex-1 w-full lg:border-r border-white/10">
              <HeroFeature
                title="Modern Tech-stack"
                description="Materi yang diajarkan semuanya soal teknologi yang modern dan standar industri saat ini."
                icon={HiOutlineViewGrid}
              />
            </div>
            <div className="lg:flex-1 w-full lg:border-r border-white/10">
              <HeroFeature
                title="Studi Kasus"
                description="Setiap pertemuan disertai dengan contoh studi kasus yang nyata dan bener nyata hehe."
                icon={HiOutlineTemplate}
              />
            </div>
            <div className="lg:flex-1 w-full">
              <HeroFeature
                title="Portofolio Yang Mantep"
                description="Nggak ada sertifikat, belajar bareng gw langsung bisa bikin startup yang di-invest paul graham."
                icon={HiOutlineLightningBolt}
              />
            </div>
          </div>
        </Container>
      </div>

      <section className="py-20 lg:py-40">
        <Container>
          <div className="flex flex-wrap items-center -mx-10">
            <div className="w-full px-4 lg:w-6/12 px-10 lg:mt-10">
              <div className="relative md:p-10">
                <div className="absolute top-[-5px] left-[-5px] z-[-1] w-64 h-64 bg-blue-100 hidden md:block" />
                <div className="absolute bottom-[-35px] right-[-35px] z-[-1] w-64 h-64 bg-blue-500 rounded-full hidden md:block" />
                <img
                  alt="gw"
                  className="shadow-xl rounded"
                  src="https://images.unsplash.com/photo-1565967070537-926bf789eeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                />
                <p className="text-sm text-gray-600 mt-4">
                  Photo by{' '}
                  <a href="https://unsplash.com/@madisontraveling?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Madison Yocum
                  </a>{' '}
                  on{' '}
                  <a href="https://unsplash.com/s/photos/man-laptop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </p>
              </div>
            </div>
            <div className="lg:w-6/12 px-10 mt-20 lg:mt-0">
              <SectionBadge>Introduction</SectionBadge>
              <SectionTitle className="mb-8">
                Siapa sih gw ini sebenernya?{' '}
                <span className="font-semibold">Berkenalan dulu</span> sama
                mentornya!
              </SectionTitle>
              <IntroCard
                icon={HiOutlineAcademicCap}
                title="Pendidikan"
                content="Pendidikan gw bagus banget, gw dulu kuliah di Harvard cabang Depok. Ini detail pendidikan gw:"
                list={[
                  { title: '2008-2014', description: 'SMK Menengah Kejuruan' },
                  {
                    title: '2014-2019',
                    description: 'Universitas Harvard Cabang Depok',
                  },
                  { title: '2019-2021', description: 'Kuliah Gratis CS50' },
                ]}
              />
              <IntroCard
                icon={HiOutlineTerminal}
                title="Pengalaman Kerja"
                content="Udah banyak pengalaman kerja gw, apalagi gw ini front-end enjinir di big company. Jadi, gw udah pasti layak deh jadi mentor lo!"
              />
              <IntroCard
                icon={HiOutlineHeart}
                title="Pengalaman Percintaan"
                content="Nggak ada deh keknya, gw sibuk memperbaiki tatanan dunia ini sampe lupa pacaran. Eh, baru inget, keknya pernah deh, tapi pacaran online hehe~"
              />
            </div>
          </div>

          <hr className="border-gray-100 md:my-36 my-24" />

          <div className="lg:w-6/12 md:w-8/12 w-full mx-auto text-center">
            <SectionBadge>Pokoknya yang modern-modern</SectionBadge>
            <SectionTitle>
              Apa sih yang{' '}
              <span className="font-semibold">bakal gw ajarin</span> di sini?
              Wah banyak banget!
            </SectionTitle>
          </div>

          <div className="flex flex-wrap mt-16 -mx-6">
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full mb-12">
              <IllustrationCard
                title="Belajar Pake Terminal"
                description="Developer yang oke itu yang apa-apa pake terminal, masa hari gini masih pake GUI, sih?"
                image="/illustration-3.png"
              />
            </div>
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full mb-12">
              <IllustrationCard
                title="Bikin Website Responsive"
                description="Wah sekarang kan orang banyak yang pake device macem-macem ya. Ya itu aja sih."
                image="/illustration-2.png"
              />
            </div>
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full mb-12">
              <IllustrationCard
                title="Nggak Tau Ini Apa"
                description="Bikin ilustrasi itu susah ya, jadi lo nggak usah protes ini ilustrasi apaan hehe"
                image="/illustration-1.png"
              />
            </div>
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full mb-12">
              <IllustrationCard
                title="Sama Ini Juga Wkwk"
                description="Lagian kan lo bisa ganti dengan teks yang lebih bener dari yang ini, ini kan cuma dummy teks xixi"
                image="/illustration-4.png"
              />
            </div>
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full mb-12 lg:mb-0">
              <IllustrationCard
                title="Sama Ini Juga Wkwk"
                description="Lagian kan lo bisa ganti dengan teks yang lebih bener dari yang ini, ini kan cuma dummy teks xixi"
                image="/illustration-4.png"
              />
            </div>
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full mb-12 lg:mb-0">
              <IllustrationCard
                title="Nggak Tau Ini Apa"
                description="Bikin ilustrasi itu susah ya, jadi lo nggak usah protes ini ilustrasi apaan hehe"
                image="/illustration-1.png"
              />
            </div>
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full mb-12 md:mb-0">
              <IllustrationCard
                title="Bikin Website Responsive"
                description="Wah sekarang kan orang banyak yang pake device macem-macem ya. Ya itu aja sih."
                image="/illustration-2.png"
              />
            </div>
            <div className="lg:w-3/12 md:w-6/12 px-6 w-full">
              <IllustrationCard
                title="Belajar Pake Terminal"
                description="Developer yang oke itu yang apa-apa pake terminal, masa hari gini masih pake GUI, sih?"
                image="/illustration-3.png"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-40 bg-blue-50 relative overflow-hidden">
        <div className="items-center justify-center absolute inset-0 hidden md:flex">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-200/30" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-200/30 animate-ping" />
          <div className="absolute w-[700px] h-[700px] rounded-full bg-blue-200/20" />
          <div className="absolute w-[900px] h-[900px] rounded-full bg-blue-200/10" />
        </div>
        <Container className="relative z-1">
          <div className="lg:w-6/12 w-full mx-auto text-center">
            <SectionBadge>Wah Ada Banyak Ya</SectionBadge>
            <SectionTitle>
              Semua Ini Teknologi Yang{' '}
              <span className="font-semibold">Bakal Lo Pelajarin</span>, Cuy!
            </SectionTitle>
          </div>
          <div className="flex md:-mx-10 items-center xl:my-40 my-20 flex-col md:flex-row space-y-8 lg:space-y-0">
            <div className="flex flex-col flex-shrink-0 md:flex-1 w-full px-4 lg:px-10 space-y-8 lg:space-y-16">
              <LangCard logo="/react.svg" name="React" />
            </div>
            <div className="flex flex-col flex-shrink-0 md:flex-1 w-full px-4 lg:px-10 space-y-8 lg:space-y-16">
              <LangCard logo="/nodejs.svg" name="Node JS" />
              <LangCard logo="/github.svg" name="GitHub" />
            </div>
            <div className="flex flex-col flex-shrink-0 md:flex-1 w-full px-4 lg:px-10 space-y-8 lg:space-y-16">
              <LangCard logo="/javascript.svg" name="JavaScript" />
              <LangCard logo="/redux.svg" name="Redux" />
              <LangCard logo="/tailwindcss.svg" name="Tailwind CSS" />
            </div>
            <div className="flex flex-col flex-shrink-0 md:flex-1 w-full px-4 lg:px-10 space-y-8 lg:space-y-16">
              <LangCard logo="/jquery.svg" name="jQuery" />
              <LangCard logo="/hotjar.svg" name="Hotjar" />
            </div>
            <div className="flex flex-col flex-shrink-0 md:flex-1 w-full px-4 lg:px-10 space-y-8 lg:space-y-16">
              <LangCard logo="/sass.svg" name="Sass" />
            </div>
          </div>
          <div className="lg:w-6/12 md:w-8/12 w-full mx-auto text-center">
            <SectionDescription>
              Puluhan teknologi ini yang akan bikin hidup lo jadi berubah, dari
              puluhan teknologi ini ada 2 yang mantep banget, 2 teknologi itu
              ... baca selengkapnya.
            </SectionDescription>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-40">
        <Container>
          <div className="flex flex-wrap items-center -mx-6">
            <div className="order-2 w-full px-6 lg:w-6/12 xl:order-1">
              <SectionBadge>Di mana aja</SectionBadge>
              <SectionTitle>
                Belajar bisa di mana aja, di starbaks contohnya, walaupun nggak
                fokus, gapapa{' '}
                <span role="img" aria-label="ok">
                  👌
                </span>
              </SectionTitle>
              <SectionDescription>
                Banyak hal yang bakal lo pelajari, termasuk dari hidup lo
                sendiri. Lo mungkin aja seorang yang kuat, tapi kalo liat orang
                yang pake jQuery lo mending lari.
              </SectionDescription>

              <SquareList>
                <SquareListItem point="Zoom:">
                  belajarnya lewat Zoom, nanti lo di-invite ke sebuah Zoom
                  meeting yang di dalemnya banyak pelajar lainnya.
                </SquareListItem>
                <SquareListItem point="Banyakin Nanya:">
                  kalo lo nggak banyak nanya nantinya cuma tau sedikit, mending
                  banyak nanya aja sampe mentor lo capek.
                </SquareListItem>
                <SquareListItem point="Terima aja:">
                  nggak semua hal lo bisa kontrol, lo cuma bisa kontrol diri lo
                  sendiri, fokus aja sama yang bisa lo kontrol, orang lain
                  terserah mereka sendiri.
                </SquareListItem>
              </SquareList>
            </div>
            <div className="order-1 w-full px-6 mb-10 xl:order-2 lg:w-6/12 lg:mx-0 lg:mb-0">
              <img
                className="shadow-lg rounded-lg"
                src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&h=500&q=80"
                alt="Preview"
              />
              <p className="text-sm text-gray-600 mt-4">
                Photo by{' '}
                <a href="https://unsplash.com/@mr_vero?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Irvan Smith
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/s/photos/man-laptop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </div>
          </div>

          <hr className="border-gray-100 md:my-36 my-24" />

          <div className="flex flex-wrap items-center mt-20 -mx-6">
            <div className="w-full px-6 mb-10 lg:w-6/12 w-full lg:mx-0 lg:mb-0">
              <img
                className="shadow-xl rounded"
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=800&q=80"
                alt="Preview"
              />
              <p className="text-sm text-gray-600 mt-4">
                Photo by{' '}
                <a href="https://unsplash.com/@myleon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Leon
                </a>{' '}
                on{' '}
                <a href="https://unsplash.com/@myleon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
            </div>
            <div className="w-full px-6 lg:w-6/12">
              <SectionBadge>Tugas Akhir</SectionBadge>
              <SectionTitle>
                Nanti ada tugas akhir dan lo harus mempresentasikan apa yang lo
                udah bikin itu{' '}
                <span role="img" aria-label="metal">
                  🤘
                </span>
              </SectionTitle>
              <SectionDescription>
                Seperti yang gw bilang di awal, di sini tuh nggak ada
                sertifikat, nanti lo bisa bikin produk sendiri yang dijamin akan
                membuat paul graham tercengang dan ingin invest hehe.
              </SectionDescription>

              <IconList>
                <IconListItem
                  icon={HiOutlineAnnotation}
                  title="Dikomentarin Temen"
                  description="Namanya juga manusia idupnya pasti ngomentarin lo, yaudah nanti produk lo juga dikomentarin temen-temen lo sendiri."
                />
                <IconListItem
                  icon={HiOutlineShoppingCart}
                  title="Lah Kok Icon Troli"
                  description="Iya ya kenapa gw pake icon troli, yaudah lo ganti aja pake konten dan icon yang relevan yak xixi."
                />
              </IconList>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-blue-50 md:bg-none py-20 md:py-0">
        <Container>
          <div className="xl:p-20 md:py-20 lg:px-10 md:px-10 rounded-lg md:bg-gradient-to-br from-blue-50">
            <div className="lg:w-6/12 md:w-8/12 w-full mx-auto text-center">
              <SectionBadge>Harganya Bos</SectionBadge>
              <SectionTitle>
                Harganya udah paling sesuai dengan{' '}
                <span className="font-semibold">kantong mahasiswa</span> Harvard
              </SectionTitle>
            </div>
            <div className="lg:w-10/12 w-full mx-auto flex justify-center items-center mt-16 flex-wrap space-y-8 md:space-y-0">
              <div className="md:w-6/12 w-full">
                <PricingCard
                  name="Noob"
                  price="80000"
                  description="Ini yang paling murah ya"
                  features={[
                    'Mentorship Seumur Hidup',
                    'Dikash Source Code',
                    'Code Review',
                    'Video Call',
                    'Main Futsal Bareng',
                    'Naik Haji Bila Mampu',
                  ]}
                />
              </div>
              <div className="md:w-6/12 w-full">
                <PricingCard
                  highlight
                  name="Widih"
                  price="1200000"
                  description="Anjay ini mah kemahalan"
                  features={[
                    'Mentorship Seumur Hidup',
                    'Dikash Source Code',
                    'Code Review',
                    'Video Call',
                    'Main Futsal Bareng',
                    'Naik Haji Bila Mampu',
                    'Diingetin Makan',
                    'Video Call Sampe Bobo',
                    'Hm apa lagi ya',
                  ]}
                />
              </div>
            </div>
            <div className="md:w-6/12 w-full mx-auto text-center mt-16">
              <SectionDescription>
                Harga di atas belom termasuk PPN ya, kalo lo ga bayar pajak
                nanti pejabat korupsi apa dong?
              </SectionDescription>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-40">
        <Container>
          <div className="flex -mx-6 flex-wrap">
            <div className="lg:w-6/12 w-full px-6">
              <SectionBadge>Testimonial</SectionBadge>
              <SectionTitle>
                Apa kata orang-orang yang pernah{' '}
                <span className="font-semibold">ikut mentorship</span> ini?
              </SectionTitle>
            </div>
            <div className="lg:w-6/12 w-full px-6">
              <SectionDescription>
                Kalo lo belum yakin sama mentorship ini, baca aja dulu
                testimonial di sini, siapa tau lo jadi yakin dan mau ikut
                mentorship ini untuk merubah hidup lo yang sekarang sebenernya
                udah baik sih. Tapi ya biar lebih baik lagi aja lo ikutan
                mentorship ini hehehe.
              </SectionDescription>
            </div>
          </div>
          <Slider className="mt-16" {...settings}>
            <TestimonialCard
              testimoni={
                '"Makasih banyak ya bang mentorship-nya, sekarang gw bisa deketin cewek yang gw suka dengan penuh percaya diri"'
              }
              avatar="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              name="Mamat Romadon"
              job="Mahasiswa"
            />
            <TestimonialCard
              testimoni={
                '"Iya sama-sama mas Romadon, semoga bisa langgeng ya. Eh ini kan harusnya testimonial kok malah dijawab sih. Hadeh."'
              }
              avatar="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              name="Azis Kasih Ibu"
              job="Pementor Handal"
            />
            <TestimonialCard
              testimoni={
                '"Aku harap dengan adanya mentorship ini bisa membangun negara ini lebih mau lagi. Yang dari Indonesia like 👍"'
              }
              avatar="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              name="Dadan Geming"
              job="Yotuber Pansos"
            />
            <TestimonialCard
              testimoni={
                '"Ya aku cuma temen mentornya aja sih diminta buat ngisi form testimoni, ya udah aku isi aja hehe"'
              }
              avatar="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
              name="Dadan Geming"
              job="Temennya Mentor"
            />
          </Slider>
        </Container>
      </section>

      <footer className="relative pb-24 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-800 z-[-1]" />
        <Container>
          <div className="flex py-14 border-b border-white/10 mb-14 flex-wrap">
            <div className="lg:w-6/12 md:w-7/12 w-full">
              <div className="text-2xl font-semibold text-white">
                Sudah siap meningkatkan skill kamu?
              </div>
              <div className="text-white/60 mt-2 text-lg">
                Kapan lagi lo belajar langsung sama ahlinya! Mending sekarang
                aja join, di tempat lain mentonya noob semua hahaha!
              </div>
            </div>
            <div className="ml-auto lg:w-6/12 md:w-4/12 flex lg:space-x-4 lg:justify-end justify-center items-center flex-wrap flex-col lg:flex-row space-y-4 lg:space-y-0 w-full mt-4 md:mt-0">
              <Button
                variant="solidYellow"
                className="w-full justify-center md:w-auto">
                Daftar Sekarang
              </Button>
              <Button
                variant="lightOpacity"
                className="w-full justify-center md:w-auto">
                <HiOutlineAnnotation className="h-auto w-6 mr-2" /> Tanya Dulu
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap -mx-10">
            <div className="w-full px-10 mb-10 sm:w-6/12 lg:w-3/12 lg:mb-0">
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Logo"
                  width="40"
                  height="40"
                  className="shadow-lg rounded"
                />
                <h2 className="text-xl font-bold ml-4">KKTBSYS</h2>
              </div>
              <p className="mt-4 text-white/60 leading-relaxed">
                Design By{' '}
                <a
                  href="https://twitter.com/mhdnauvalazhar"
                  className="underline">
                  Nauval
                </a>{' '}
                &bull; Copyright &copy; {new Date().getFullYear()}. All rights
                reserved.
              </p>
              <hr className="my-6 border-white/5" />
              <div className="flex items-center flex-wrap space-x-2 space-y-2">
                <SocialLink
                  icon={FaFacebookF}
                  name="Facebook"
                  href="https://facebook.com/mhdnauvalazhar"
                />
                <SocialLink
                  icon={FaTwitter}
                  name="Twitter"
                  href="https://twitter.com/mhdnauvalazhar"
                />
                <SocialLink
                  icon={FaGithub}
                  name="GitHub"
                  href="https://github.com/nauvalazhar"
                />
                <SocialLink
                  icon={FaLinkedinIn}
                  name="LinkedIn"
                  href="https://www.linkedin.com/in/muhamad-nauval-azhar-615922115/"
                />
                <SocialLink
                  icon={FaYoutube}
                  name="Youtube"
                  href="https://youtube.com/arrayid"
                />
              </div>
            </div>
            <div className="w-full px-10 mb-10 lg:w-3/12 md:w-6/12 lg:mb-0">
              <FooterTitle>Products</FooterTitle>
              <ul className="mt-4">
                <li>
                  <FooterLink href="https://www.figma.com/community/file/928870458970385309">
                    Social Feeds
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="https://getstisla.com">Stisla</FooterLink>
                </li>
                <li>
                  <FooterLink href="https://kodinger.com">Kodinger</FooterLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-10 mb-10 lg:w-3/12 lg:mb-0 md:w-6/12">
              <FooterTitle>Company</FooterTitle>
              <ul className="mt-4">
                <li>
                  <FooterLink href="/">Contact</FooterLink>
                </li>
                <li>
                  <FooterLink href="/">About</FooterLink>
                </li>
                <li>
                  <FooterLink href="/">Privacy Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href="/">Terms of Services</FooterLink>
                </li>
                <li>
                  <FooterLink href="/">Help</FooterLink>
                </li>
              </ul>
            </div>
            <div className="w-full px-10 lg:w-3/12 md:w-6/12">
              <FooterTitle>External</FooterTitle>
              <ul className="mt-4">
                <li>
                  <FooterLink href="https://nauv.al">Nauval</FooterLink>
                </li>
                <li>
                  <FooterLink href="https://figma.com/mhd">Figma</FooterLink>
                </li>
                <li>
                  <FooterLink href="https://dribbble.com/mhdnauvalazhar">
                    Dribbble
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
