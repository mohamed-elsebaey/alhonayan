import { MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { whatsappContacts } from "@/constants";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactUsPage = () => {
    // دالة توليد رابط خرائط جوجل بناءً على العنوان (احتياطي)
    const getMapUrl = (address: string) =>
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    // دالة عرض الرقم بصيغة محلية (استبدال +966 بـ 0)
    const formatPhone = (number: string) =>
        number.startsWith("+966") ? number.replace("+966", "0") : number;

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gradient-3 py-16"
            style={{ backgroundImage: "url('/background/background-image6.png')" }}
        >
            <div className="w-full max-w-6xl mx-auto content-width">
                <div className="mb-12 text-center animate-fadeIn">
                    <span className="text-primary text-lg font-semibold">تواصل معنا</span>
                    <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-secondary">فروعنا وخدمة العملاء</h2>
                    <p className="mb-6 text-lg sm:text-xl text-muted-foreground">
                        يسعدنا تواصلك معنا عبر أحد فروعنا التالية أو عبر رقم الواتساب الخاص بكل فرع.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8 flex-wrap items-stretch justify-center">
                    {whatsappContacts.map((branch) => (
                        <Card
                            key={branch.number}
                            className=" flex flex-col gap-4 bg-white/90 backdrop-blur-sm border-2 border-primary/20 shadow-2xl p-6 md:p-8 animate-fadeIn rounded-2xl transition-all duration-300 hover:scale-[1.025] hover:shadow-[0_8px_32px_0_rgba(253,142,26,0.15)] hover:border-primary/40 hover:bg-gradient-to-l hover:from-[#fff7ed] hover:to-[#f3f8fc] w-full md:w-1/3  md:min-w-[500px]"
                        >
                            {/* اسم الفرع */}
                            <div className="flex items-center justify-center mb-2">
                                <span className="text-primary text-3xl md:text-4xl font-black tracking-widest text-center drop-shadow-sm">
                                    {branch.label}
                                </span>
                            </div>
                            {/* العنوان */}
                            <div className="flex items-center gap-2 text-gray-700 text-lg font-medium justify-start md:justify-center">
                                <MapPinIcon className="w-5 h-5 text-secondary" />
                                <span>العنوان:</span>
                                <span className="font-semibold">{branch.address}</span>
                            </div>
                            {/* رقم التواصل */}
                            <div className="flex items-center gap-2 text-gray-700 text-lg font-medium justify-start md:justify-center">
                                <PhoneIcon className="w-5 h-5 text-secondary" />
                                <span>رقم التواصل:</span>
                                <Link
                                    href={`https://wa.me/${branch.number.replace('+', '')}`}
                                    target="_blank"
                                    className="text-primary font-bold underline hover:text-secondary transition"
                                >
                                    <span dir="ltr" className="tracking-widest select-text">{formatPhone(branch.number)}</span>
                                </Link>
                            </div>
                            {/* زر الموقع */}
                            <div className="flex items-center justify-center mt-2">
                                <Button
                                    asChild
                                    size="lg"
                                    className="header-gradient text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
                                >
                                    <Link
                                        href={branch.location ? branch.location : getMapUrl(branch.address)}
                                        target="_blank"
                                        className="flex items-center gap-2"
                                    >
                                        <MapPinIcon className="w-6 h-6 text-white" />
                                        <span>الموقع على الخريطة</span>
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
