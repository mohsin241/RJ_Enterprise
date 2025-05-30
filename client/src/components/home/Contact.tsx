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
  name: z.string().min(2, { message: 'Name is required' }),
  company: z.string().min(2, { message: 'Company name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  product: z.string().optional(),
  message: z.string().min(10, { message: 'Message is required (min 10 characters)' }),
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
      // In a real implementation, you would send this data to your API
      console.log('Form submitted:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
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
                      <FormLabel>Your Message *</FormLabel>
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
                    123 Industrial Area, Phase II<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <span className="material-icons text-secondary mr-4">phone</span>
                <div>
                  <h4 className="font-bold mb-1">Phone Number</h4>
                  <p><a href="tel:+919999999999" className="text-white/80 hover:text-white transition">+91 99999 99999</a></p>
                  <p><a href="tel:+919111111111" className="text-white/80 hover:text-white transition">+91 91111 11111</a></p>
                </div>
              </div>
              
              <div className="flex">
                <span className="material-icons text-secondary mr-4">email</span>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p><a href="mailto:info@rjenterpriseinfo.com" className="text-white/80 hover:text-white transition">info@rjenterpriseinfo.com</a></p>
                  <p><a href="mailto:sales@rjenterpriseinfo.com" className="text-white/80 hover:text-white transition">sales@rjenterpriseinfo.com</a></p>
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
              <div className="flex space-x-4">
                <a href="https://facebook.com" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                  <span className="material-icons text-white">facebook</span>
                </a>
                {/* <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                  <span className="material-icons text-white">linkedin</span>
                </a> */}
                {/* <a href="https://twitter.com" aria-label="" className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition">
                  <span className="material-icons text-white"></span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
