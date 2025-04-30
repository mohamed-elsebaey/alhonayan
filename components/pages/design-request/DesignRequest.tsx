'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"

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

const DesignRequest = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    buildingType: '',
    city: '',
    plotNumber: '',
    planNumber: '',
    area: '',
    floors: '',
    budget: '',
    designReference: ''
  });
  // toast("Event has been created", {
  //   description: "Sunday, December 03, 2023 at 9:00 AM",
  //   action: {
  //     label: "Undo",
  //     onClick: () => console.log("Undo"),
  //   },
  // })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // التحقق من صحة البيانات
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType || !formData.buildingType) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    // هنا يمكنك إضافة منطق إرسال البيانات
    toast.success('تم إرسال الطلب بنجاح');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-right mb-8 text-primary">نموذج طلب تصميم</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8 text-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* الاسم */}
              <div className="space-y-2">
                <Label className="text-lg">الاسم</Label>
                <Input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="الاسم" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>

              {/* البريد */}
              <div className="space-y-2">
                <Label className="text-lg">البريد الإلكتروني</Label>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>

              {/* الجوال */}
              <div className="space-y-2">
                <Label className="text-lg">الجوال</Label>
                <Input 
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="رقم الجوال" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>

              {/* المدينة */}
              <div className="space-y-2">
                <Label className="text-lg">المدينة</Label>
                <Input 
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="المدينة" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>
            </div>

            {/* نوع الخدمة التصميمية */}
            <div className="space-y-4">
              <Label className="text-lg">نوع الخدمة التصميمية</Label>
              <RadioGroup 
                value={formData.serviceType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {['مقترح', 'مبدئي', 'مخطط', 'مخطط نهائي', 'مخطط تنفيذية والإنشائي', 'مخططات وتشطيب', 'تصميم داخلي', 'إشراف', 'تعديل'].map((service) => (
                  <div key={service} className="flex items-center space-x-2 flex-row-reverse bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <RadioGroupItem value={service} id={service} />
                    <Label htmlFor={service} className="cursor-pointer">{service}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* نوع المنشأة */}
            <div className="space-y-4">
              <Label className="text-lg">نوع المنشأة</Label>
              <RadioGroup 
                value={formData.buildingType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, buildingType: value }))}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {['تصميم سكني', 'تصميم تجاري', 'تصميم صناعي', 'تصميم موقع', 'مستشفى', 'منتجع', 'بناية سكنية', 'تأهيل', 'تأهيل هندسي'].map((type) => (
                  <div key={type} className="flex items-center space-x-2 flex-row-reverse bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type} className="cursor-pointer">{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* رقم قطعة الأرض */}
              <div className="space-y-2">
                <Label className="text-lg">رقم قطعة الأرض</Label>
                <Input 
                  name="plotNumber"
                  value={formData.plotNumber}
                  onChange={handleChange}
                  placeholder="رقم قطعة الأرض" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>

              {/* رقم المخطط */}
              <div className="space-y-2">
                <Label className="text-lg">رقم المخطط</Label>
                <Input 
                  name="planNumber"
                  value={formData.planNumber}
                  onChange={handleChange}
                  placeholder="رقم المخطط" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>

              {/* مساحة الأرض */}
              <div className="space-y-2">
                <Label className="text-lg">مساحة الأرض</Label>
                <Input 
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="مساحة الأرض" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>

              {/* عدد الأدوار */}
              <div className="space-y-2">
                <Label className="text-lg">عدد الأدوار</Label>
                <Input 
                  name="floors"
                  value={formData.floors}
                  onChange={handleChange}
                  placeholder="عدد الأدوار" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>

              {/* الميزانية */}
              <div className="space-y-2">
                <Label className="text-lg">الميزانية</Label>
                <Input 
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="الميزانية" 
                  className="w-full focus:ring-2 focus:ring-primary" 
                />
              </div>
            </div>

            {/* المرجعية النهائية للتصميم */}
            <div className="space-y-2">
              <Label className="text-lg">المرجعية النهائية للتصميم</Label>
              <Textarea 
                name="designReference"
                value={formData.designReference}
                onChange={handleChange}
                placeholder="المرجعية النهائية للتصميم" 
                className="w-full focus:ring-2 focus:ring-primary min-h-[150px]" 
              />
            </div>

            <div className="text-center pt-6">
              <Button 
                type="submit" 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              >
                إرسال الطلب
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default DesignRequest