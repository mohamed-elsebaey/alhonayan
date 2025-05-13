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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من صحة البيانات
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.serviceType ||
      !formData.buildingType
    ) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    // هنا يمكنك إضافة منطق إرسال البيانات
    toast.success("تم إرسال الطلب بنجاح");
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
              >
                إرسال الطلب
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default DesignRequestPage;
