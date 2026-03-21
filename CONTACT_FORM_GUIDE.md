# Contact Form Guide - What Patients Should Fill In

## Form Fields Explained

Your contact form on `/contact` has **5 fields**. Here's what each one is for and what patients should enter:

---

## 1️⃣ **Full Name** (Required)
**Field Type:** Text Input  
**What to enter:** The patient's complete name

**Example:**
```
Rajesh Kumar Singh
```

**Why we ask:** To know who is requesting the appointment

---

## 2️⃣ **Email Address** (Required)
**Field Type:** Email Input  
**What to enter:** A valid email address for communication

**Example:**
```
rajesh.singh@gmail.com
```

**Why we ask:** So Dr. Raghvendra's clinic can send appointment confirmation and updates by email

---

## 3️⃣ **Phone Number** (Required)
**Field Type:** Phone Input  
**What to enter:** Their contact phone number (preferably with country code)

**Example:**
```
+91 9876543210
```

**Why we ask:** For quick communication about appointment scheduling and urgent matters

---

## 4️⃣ **Service Required** (Required)
**Field Type:** Dropdown Menu  
**Options Available:**
- Cardiac Consultation (most popular)
- ECG (Electrocardiogram)
- 2D Echo (Echocardiography)
- Angiography
- Angioplasty
- Pacemaker Implantation
- General Checkup
- Other

**Example:**
```
2D Echo (Echocardiography)
```

**Why we ask:** To know which cardiac service the patient needs so the clinic can prepare and schedule accordingly

---

## 5️⃣ **Message/Additional Info** (Optional)
**Field Type:** Large Text Area (5 lines)  
**What to enter:** Any additional health information or concerns

**Example:**
```
I'm experiencing chest pain for the last 2 weeks, especially after walking. 
My father had a heart attack at age 55. I'm 48 years old. 
I want to get a complete cardiac checkup done as soon as possible.
```

**Why we ask:** Helps the doctor understand the patient's condition better and prioritize the appointment

---

## 📋 Sample Form Submission

Here's a complete example of what a patient should submit:

| Field | Patient's Answer |
|-------|------------------|
| **Full Name** | Priya Sharma |
| **Email** | priya.sharma2024@gmail.com |
| **Phone** | +91 9876543210 |
| **Service** | Cardiac Consultation |
| **Message** | My blood pressure has been high for 6 months. Doctor recommended getting heart checked. Can I get an appointment this week? |

---

## ✅ What Happens After Submission

1. **Form is sent** to `drraghven10@gmail.com`
2. **Clinic receives** all the patient's information
3. **Dr. Raghvendra's team** reviews the request
4. **Clinic calls** the patient at the phone number provided
5. **Appointment scheduled** at a convenient time
6. **Confirmation email** sent to the patient

---

## 🎯 Tips for Patients Filling the Form

✅ **Do:**
- Enter full legal name
- Use active email address they check regularly
- Provide phone number where they can be reached
- Select the most relevant service
- Describe symptoms clearly in the message

❌ **Don't:**
- Leave required fields empty
- Provide incomplete phone number
- Use incorrect email address
- Be too brief - more details help the doctor

---

## 📝 Common Service Selections

**If patient has:** → **Select Service:**
- Never had heart checkup → Cardiac Consultation
- Wants heart electrical activity checked → ECG
- Wants heart structure checked → 2D Echo
- Has blocked arteries (known) → Angiography
- Needs artery opening procedure → Angioplasty
- Needs heart rhythm device → Pacemaker Implantation
- Just wants general checkup → General Checkup
- Not sure which service → Cardiac Consultation

---

## 💡 Good Message Examples

### Example 1 (Simple)
```
I have been experiencing shortness of breath 
and want to get my heart checked. Can I book 
an appointment for ECG?
```

### Example 2 (Detailed)
```
Hi Dr. Raghvendra,

I'm 52 years old and have had high blood pressure 
for 3 years. Recently I've been feeling chest 
tightness during exercise. My mother had a heart 
attack when she was 60. 

I would like to book an appointment for a complete 
cardiac evaluation. I'm available on weekends 
preferably. Thank you!
```

### Example 3 (Follow-up)
```
I was referred to you by my GP for follow-up 
after my last angioplasty 6 months ago. I need 
to schedule my follow-up checkup. Thanks!
```

---

## 🔔 Important Notes

1. **Form is mobile-friendly** - Patients can fill it on their phones
2. **Asterisk (*)** marks required fields
3. **Form sends to email** - Make sure Formspree is set up
4. **Response time** - Clinic should respond within 24 hours
5. **Confirmation message** - "Thank you! Your appointment request has been sent"

---

## 📊 Form Submission Flow

```
Patient fills form
        ↓
Clicks "Book Appointment" button
        ↓
Form validates (checks required fields)
        ↓
Sends to Formspree
        ↓
Formspree forwards to drraghven10@gmail.com
        ↓
Email received in inbox
        ↓
Clinic team reviews
        ↓
Clinic calls patient
        ↓
Appointment scheduled
```

---

## ⚙️ Current Form Endpoint

**Email sends to:** drraghven10@gmail.com  
**Via:** Formspree (free email forwarding service)  
**Formspree ID:** `f/xjkvzyqy` (placeholder - needs to be updated with your actual ID)

---

## 🔧 If You Want to Change Form Fields

You can customize the form by editing:
- File: `app/contact/page.tsx`
- Add/remove fields in the form
- Change the service options dropdown
- Modify placeholder text

Just let me know if you want to add or change any fields!

---

## 📞 Support

If patients have questions before filling the form:
- **Phone:** +91 8107667788
- **Email:** drraghven10@gmail.com
- **Address:** 52 Janak Marg, Hanuman Nagar Extension, Jaipur
- **Hours:** Monday - Saturday, 10:00 AM - 6:00 PM

---

**Remember:** The form is the first point of contact for many patients. Make sure the clinic team responds quickly and professionally! ✅
