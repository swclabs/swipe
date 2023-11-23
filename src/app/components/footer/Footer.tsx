import Link from "next/link";
import Container  from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
    return <footer className="bg-slate-700 
    text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row
            justify-between pt-16 pb-8">
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Về E-Shop</h3>
                    <Link href="#">Giới thiệu về công ty</Link>
                    <Link href="#">Tuyển dụng</Link>
                    <Link href="#">Câu hỏi thường gặp mua hàng</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Chính sách</h3>
                    <Link href="#">Chính sách bảo hành</Link>
                    <Link href="#">Chính sách thanh toán</Link>
                    <Link href="#">Chính sách giao hàng</Link>
                    <Link href="#">Chính sách bảo mật</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Thông tin</h3>
                    <Link href="#">Hệ thống cửa hàng</Link>
                    <Link href="#">Hệ thống bảo hành</Link>
                    <Link href="#">Chính sách đổi trả</Link>
                </FooterList>
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-base font-bold mb-2">Tổng đài hỗ trợ</h3>
                    <p className="mb-2">Gọi mua: 1800.xxxx(8:00-21:00)</p>
                    <p className="mb-2">CSKH: 1800.xxxx(8:00-21:00)</p>
                    <p>&copy; {new Date().getFullYear()} E~Shop. ALl rights reserved</p>
                </div>
                <FooterList>
                    <h3 className="text-base font-bold mb-2">Follow us</h3>
                    <div className="flex gap-2">
                        <Link href="#">
                            <MdFacebook size={24} />
                        </Link>
                        <Link href="#">
                            <AiFillInstagram size={24} />
                        </Link>
                    </div>
                </FooterList>
            </div>
        </Container>
    </footer>
}
 
export default Footer;