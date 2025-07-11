"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  buildingType: string;
  city: string;
  plotNumber: string;
  planNumber: string;
  area: string;
  floors: string;
  budget: string;
  designReference: string;
}

const DesignRequestPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    buildingType: "",
    city: "",
    plotNumber: "",
    planNumber: "",
    area: "",
    floors: "",
    budget: "",
    designReference: "",
  });
  const [loading, setLoading] = useState(false);

  // دالة التحقق من صحة البيانات
  const validateFormData = (data: FormData) => {
    // تحقق من الحقول المطلوبة
    if (!data.name || !data.email || !data.phone || !data.serviceType || !data.buildingType) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return false;
    }
    // تحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("يرجى إدخال بريد إلكتروني صحيح");
      return false;
    }
    // تحقق من صحة رقم الجوال السعودي
    const phoneRegex = /^05\d{8}$|^\+9665\d{8}$/;
    if (!phoneRegex.test(data.phone)) {
      toast.error("يرجى إدخال رقم جوال سعودي صحيح");
      return false;
    }
    // تحقق من القيم الرقمية (المساحة، الطول، العرض، الميزانية)
    if (data.area && (isNaN(Number(data.area)) || Number(data.area) <= 0)) {
      toast.error("يرجى إدخال مساحة أرض صحيحة");
      return false;
    }
    if (data.plotNumber && (isNaN(Number(data.plotNumber)) || Number(data.plotNumber) <= 0)) {
      toast.error("يرجى إدخال طول واجهة صحيح");
      return false;
    }
    if (data.planNumber && (isNaN(Number(data.planNumber)) || Number(data.planNumber) <= 0)) {
      toast.error("يرجى إدخال عرض واجهة صحيح");
      return false;
    }
    if (data.budget && (isNaN(Number(data.budget)) || Number(data.budget) <= 0)) {
      toast.error("يرجى إدخال ميزانية صحيحة");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // تحقق من صحة البيانات قبل الإرسال
    if (!validateFormData(formData)) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/send-design-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("تم إرسال الطلب بنجاح");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          buildingType: "",
          city: "",
          plotNumber: "",
          planNumber: "",
          area: "",
          floors: "",
          budget: "",
          designReference: "",
        });
      } else {
        toast.error("حدث خطأ أثناء إرسال الطلب: " + (data.error || ""));
      }
    } catch (err) {
      toast.error("تعذر الاتصال بالخادم. حاول لاحقًا." + err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <Card className="p-8 shadow-xl bg-white/90 backdrop-blur-sm">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-primary mb-2">
              نموذج طلب تصميم
            </h1>
            <p className="text-gray-600">
              يرجى تعبئة النموذج التالي بكافة البيانات المطلوبة
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-right mb-4 text-primary">
                المعلومات الشخصية
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-lg font-medium">الاسم</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="الاسم الكامل"
                    className="w-full transition-all hover:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-lg font-medium">البريد الإلكتروني</Label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full transition-all hover:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-lg font-medium">الجوال</Label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 XX XXX XXXX"
                    className="w-full transition-all hover:border-primary text-right"
                    dir="ltr"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-lg font-medium">المدينة</Label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="المدينة"
                    className="w-full transition-all hover:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* Project Details Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-right mb-4 text-primary">
                تفاصيل المشروع
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-lg font-medium">نوع الخدمة التصميمية</Label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceType: e.target.value,
                        }))
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg transition-all hover:border-primary"
                    >
                      <option value="" disabled>
                        اختر نوع الخدمة
                      </option>
                      {[
                        "تصميم معماري",
                        "تصميم داخلي",
                        "تصميم إنشائي",
                        "تنسيق مواقع",
                        "ميكانيكي",
                        "سباكة",
                        "إدارة مشروع",
                        "تأثيث",
                        "إشراف هندسي",
                        "استشارات هندسية",
                        "رفع مساحي",
                        "فرز مخططات",
                        "دراسات هندسية",
                        "رخصة بناء",
                        "أخرى",
                      ].map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-lg font-medium">نوع المشروع</Label>
                    <select
                      name="buildingType"
                      value={formData.buildingType}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          buildingType: e.target.value,
                        }))
                      }
                      className="w-full p-3 border border-gray-300 rounded-lg transition-all hover:border-primary"
                    >
                      <option value="" disabled>
                        اختر نوع المشروع
                      </option>
                      {[
                        "سكني",
                        "فيلا",
                        "دوبلكس",
                        "مجمع تجاري",
                        "متعدد الإستخدام",
                        "مبنى متوسط الإرتفاع",
                        "مستودعات ومصانع",
                        "مبنى عالي الإرتفاع",
                        "إستراحة",
                        "شاليه",
                      ].map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label className="text-lg font-medium">مساحة الأرض</Label>
                    <Input
                      name="area"
                      type="number"
                      min={0}
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="المساحة بالمتر المربع"
                      className="w-full transition-all hover:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-lg font-medium">طول الواجهة</Label>
                    <Input
                      name="plotNumber"
                      type="number"
                      min={0}
                      value={formData.plotNumber}
                      onChange={handleChange}
                      placeholder="الطول بالمتر"
                      className="w-full transition-all hover:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-lg font-medium">عرض الواجهة</Label>
                    <Input
                      name="planNumber"
                      type="number"
                      min={0}
                      value={formData.planNumber}
                      onChange={handleChange}
                      placeholder="العرض بالمتر"
                      className="w-full transition-all hover:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-medium">الميزانية المتوقعة</Label>
                  <Input
                    name="budget"
                    type="number"
                    min={0}
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="الميزانية بالريال السعودي"
                    className="w-full transition-all hover:border-primary"
                  />
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Button
                type="submit"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg rounded-full transition-all transform hover:scale-105"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    جاري الإرسال...
                  </span>
                ) : (
                  "إرسال الطلب"
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default DesignRequestPage;
