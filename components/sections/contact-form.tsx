import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <form className="space-y-4 rounded-lg border border-border bg-white p-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium">First name</label>
          <Input id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium">Last name</label>
          <Input id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">Business email</label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">Company</label>
          <Input id="company" name="company" autoComplete="organization" required />
        </div>
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium">Service interest</label>
        <Input id="service" name="service" placeholder="Debt recovery, RCM, consulting..." />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">How can we help?</label>
        <Textarea id="message" name="message" required />
      </div>
      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our data handling practices described in our Privacy Policy.
      </p>
      <Button type="submit">Submit inquiry</Button>
    </form>
  );
}
