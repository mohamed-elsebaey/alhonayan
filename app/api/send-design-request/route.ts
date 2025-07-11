import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // إعداد transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // محتوى الرسالة
    const mailOptions = {
      from: `"دار الحنَيان" <${process.env.EMAIL_USER}>`,
      to: 'info@alhonayan.com',
      subject: 'طلب تصميم جديد من الموقع',
      html: `
        <div style="font-family: 'Tajawal', Arial, sans-serif; background: #f9f9f9; padding: 24px; border-radius: 12px; max-width: 480px; margin: auto; border: 1px solid #eee;">
          <h2 style="text-align: center; color: #2d3a4a; margin-bottom: 24px;">طلب تصميم جديد</h2>
          <table style="width: 100%; border-collapse: collapse; background: #fff;">
            <tbody>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">الاسم:</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">البريد الإلكتروني:</td><td style="padding: 8px 0;">${data.email}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">الجوال:</td><td style="padding: 8px 0;">${data.phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">المدينة:</td><td style="padding: 8px 0;">${data.city}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">نوع الخدمة:</td><td style="padding: 8px 0;">${data.serviceType}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">نوع المشروع:</td><td style="padding: 8px 0;">${data.buildingType}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">مساحة الأرض:</td><td style="padding: 8px 0;">${data.area} متر مربع</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">طول الواجهة:</td><td style="padding: 8px 0;">${data.plotNumber} متر</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">عرض الواجهة:</td><td style="padding: 8px 0;">${data.planNumber} متر</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #444;">الميزانية المتوقعة:</td><td style="padding: 8px 0;">${data.budget} ريال سعودي</td></tr>
            </tbody>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error?.toString() }, { status: 500 });
  }
} 