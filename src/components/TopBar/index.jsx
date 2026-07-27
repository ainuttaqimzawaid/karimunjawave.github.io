import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaArrowRightLong } from 'react-icons/fa6';
import Logo from '../../assets/images/LogoTourKarimun.jpeg'
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { MdCall } from 'react-icons/md';

function TopBar() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isEnglish, setIsEnglish] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);


    // Fungsi untuk mengubah bahasa dan navigasi ke halaman yang sesuai
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng); // Ubah bahasa dengan i18next

        // Dapatkan path saat ini
        const currentPath = window.location.pathname;

        // Tentukan apakah path saat ini sudah mengandung 'en' atau 'id'
        const isEnglishPath = currentPath.startsWith('/en/');
        const isIndonesianPath = currentPath.startsWith('/id/');

        // Mengganti URL path dengan bahasa yang baru
        let newPath = currentPath;
        if (isEnglishPath || isIndonesianPath) {
            newPath = currentPath.replace(/^\/(en|id)/, `/${lng}`);
        } else {
            newPath = `/${lng}${currentPath}`;
        }

        // Navigasi ke URL yang baru
        navigate(newPath);
    };

    // Fungsi untuk menavigasi ke halaman baru dengan bahasa saat ini
    const navigateToPage = (path) => {
        const currentLang = i18n.language; // Mendapatkan bahasa saat ini
        navigate(`/${currentLang}${path}`); // Menambahkan bahasa ke path URL
    };

    const controlNavbar = useCallback(() => {
        const currentScrollY = window.scrollY;

        setLastScrollY((prevScrollY) => {
            // Menampilkan navbar jika scroll ke atas
            if (currentScrollY < prevScrollY) {
                setShowNavbar(true);
            }
            // Menyembunyikan navbar jika scroll ke bawah
            else if (currentScrollY > prevScrollY && currentScrollY > 50) {
                setShowNavbar(false);
            }

            return currentScrollY;
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [controlNavbar]);

    return (
        <Navbar expanded={expanded} onToggle={handleToggle} className={`!fixed top-0 w-full bg-white shadow-md transition-transform duration-300 z-50 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`} expand="lg" >
            <Container className="grid grid-cols-3 gap-4 md:gap-12">
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} onClick={handleToggle} className='focus:!shadow-none !border-none' />
                <Navbar.Brand onClick={() => { navigate("/") }} className='cursor-pointer'>
                    <div className='w-32 md:w-44 flex justify-center'>
                        <img src={Logo} alt="" className='w-32 md:w-44' />
                    </div>
                </Navbar.Brand>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} className='lg:px-16 z-50 mb-2'
                    style={{ width: '200px', maxWidth: '80%', padding: '10px' }}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Nav
                        className="me-auto my-2 font-Montserrat"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link onClick={() => { navigateToPage("/home"); setExpanded(false) }} className='!text-Navy'>
                            {t('navbar.home')}
                        </Nav.Link>
                        <Nav.Link onClick={() => { navigateToPage('/Service'); setExpanded(false) }} className='!text-Navy'>
                            {t('navbar.service')}
                        </Nav.Link>
                        <Nav.Link onClick={() => { navigateToPage("/Explore"); setExpanded(false) }} className='!text-Navy'>
                            {t('navbar.explore')}
                        </Nav.Link>
                        <NavDropdown title={t('navbar.package options')} id="navbarScrollingDropdown" className='!text-Navy'>
                            <NavDropdown.Item onClick={() => { navigateToPage("/Paket/2D1N"); setExpanded(false) }}>
                                {t('navbar.package2D1N')}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigateToPage("/Paket/2D2N"); setExpanded(false) }}>
                                {t('navbar.package2D2N')}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigateToPage("/Paket/3D2N"); setExpanded(false) }}>
                                {t('navbar.package3D2N')}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigateToPage("/Paket/4D3N"); setExpanded(false) }}>
                                {t('navbar.package4D3N')}
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => { navigateToPage("/Testimonials"); setExpanded(false) }} className='!text-Navy'>
                            {t('navbar.testimonials')}
                        </Nav.Link>
                    </Nav>
                </Navbar.Offcanvas>
                <div className='flex gap-2 mt-3'>
                    <div className='w-[50px] h-6 border rounded-full text-sm flex'>
                        <button onClick={() => { changeLanguage('en'); setIsEnglish(true); }} className={`px-1 rounded-full ${isEnglish ? 'text-white bg-Navy' : 'bg-white text-black'}`}>EN</button>
                        <button onClick={() => { changeLanguage('id'); setIsEnglish(false); }} className={`px-1 rounded-full ${!isEnglish ? 'text-white bg-Navy' : 'bg-white text-black'}`}>ID</button>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=6281353312334" className='no-underline'>
                        <p className='hidden text-xs md:text-base rounded-full py-2 !px-3 font-Poppins md:!flex !bg-Navy text-white no-underline -mt-2'>
                            {t('navbar.reservation')}
                            <span className='ps-1 md:p-1'>
                                <FaArrowRightLong />
                            </span>
                        </p>
                        <p className='text-xl md:hidden mt-1 !text-Navy'>
                            <MdCall />
                        </p>
                    </a>
                </div>
            </Container>
        </Navbar >
    );
}

export default TopBar;