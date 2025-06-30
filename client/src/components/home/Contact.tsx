import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name is required' }),
  company: z.string().min(2, { message: 'Company name is required' }),
   email: z
    .string()
    .min(5, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' })
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      { message: 'Invalid email format' }
    ),
   phone: z
    .string()
    .min(10, { message: 'Phone number is too short' })
    .max(15, { message: 'Phone number is too long' })
    .regex(
      /^(\+?\d{1,4}[\s-]?)?(\(?\d{3,5}\)?[\s-]?)?\d{6,10}$/,
      { message: 'Invalid phone number format' }
    ),
  product: z.string().min(1, { message: 'Please select a product' }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      product: '',
      message: '',
    },
  });

 const onSubmit = async (data: ContactFormValues) => {
  setIsSubmitting(true);

  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("company", data.company);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("product", data.product || "");
    formData.append("message", data.message);

    const response = await fetch("https://getform.io/f/bmdmwyea", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } else {
      throw new Error("Failed to send form");
    }
  } catch (error) {
    toast({
      title: "Error sending message",
      description: "Please try again later or contact us directly by phone.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-condensed font-bold text-neutral-800 mb-4">Contact Us</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, custom requirements, or to request a quote. We're here to assist you with all your steel needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="lg:w-1/2 p-8">
            <h3 className="text-xl font-condensed font-bold text-neutral-800 mb-6">Send Us a Message</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Ltd." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="product"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tmt_bars">TMT Bars</SelectItem>
                          <SelectItem value="ms_plates">Mild Steel Plates</SelectItem>
                          <SelectItem value="hr_coils">Hot Rolled Coils</SelectItem>
                          <SelectItem value="steel_beams">Steel Beams</SelectItem>
                          <SelectItem value="round_bars">Round Bars</SelectItem>
                          <SelectItem value="other">Other Products</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your requirements..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>

          <div className="lg:w-1/2 bg-primary p-8 text-white">
            <h3 className="text-xl font-condensed font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex">
                <span className="material-icons text-secondary mr-4">location_on</span>
                <div>
                  <h4 className="font-bold mb-1">Our Location</h4>
                  <p className="text-white/80">
                    Office No. B-1037, 1st Floor, B Wing,<br />
                    Bima Complex, Plot No. 119, KWC,<br />
                    Steel Market, Kalamboli,<br />
                    Navi Mumbai - 410218, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex">
                <span className="material-icons text-secondary mr-4">phone</span>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p><a href="tel:+91 8828403987" className="text-white/80 hover:text-white transition">+91 8828403987</a></p>
                  {/* <p><a href="tel:+919111111111" className="text-white/80 hover:text-white transition">+91 91111 11111</a></p> */}
                </div>
              </div>

              <div className="flex">
                <span className="material-icons text-secondary mr-4">email</span>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p><a href="mailto:info@rjenterpriseinfo.com" className="text-white/80 hover:text-white transition">sales@rjenterpriseinfo.com</a></p>
                  {/* <p><a href="mailto:sales@rjenterpriseinfo.com" className="text-white/80 hover:text-white transition">sales@rjenterpriseinfo.com</a></p> */}
                </div>
              </div>

              <div className="flex">
                <span className="material-icons text-secondary mr-4">schedule</span>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-white/80">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-white/80">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a href="https://facebook.com" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                  <span className="material-icons text-white">facebook</span>
                </a>

                <a href="https://www.indiamart.com/rjenterpriseinfo" aria-label="IndiaMART" className="bg-white/10 pl-2 hover:bg-white/20 w-10 h-10 rounded-full flex items-center transition">
                  <img src="/indiaMart.png" alt="IndiaMART" className="w-6 h-6 object-contain filter invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
