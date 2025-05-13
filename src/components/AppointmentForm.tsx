
import React, { useState } from 'react';
import { format } from 'date-fns';
import { fi } from 'date-fns/locale';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { CalendarIcon } from 'lucide-react';

const timeSlots = [
  "12:00", "13:00", "14:00", "15:00", 
  "16:00", "17:00", "18:00", "19:00", "20:00"
];

const AppointmentForm: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) {
      toast.error('Valitse päivämäärä ja aika');
      return;
    }
    
    if (!name || !email || !phone) {
      toast.error('Täytä kaikki pakolliset kentät');
      return;
    }
    
    // In a real app, this would send data to a server
    toast.success('Varauksesi on vastaanotettu!', {
      description: `${format(date, 'PPP', { locale: fi })} klo ${time}`
    });
    
    // Reset form
    setDate(undefined);
    setTime(null);
    setName('');
    setEmail('');
    setPhone('');
    setPeople('1');
  };

  return (
    <section id="varaa" className="py-16 px-4 bg-black/50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Varaa aikasi</h2>
        
        <Card className="card-glass max-w-3xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="text-hohtopink">Tee varaus</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Päivämäärä</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP', { locale: fi }) : <span>Valitse päivä</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        locale={fi}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label>Aika</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot}
                        type="button"
                        variant={time === slot ? "default" : "outline"}
                        className={cn(
                          "w-full",
                          time === slot && "bg-hohtopink text-black hover:text-black hover:bg-hohtopink-dark"
                        )}
                        onClick={() => setTime(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="name">Nimi*</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Sähköposti*</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Puhelinnumero*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="people">Henkilömäärä</Label>
                <Input
                  id="people"
                  type="number"
                  min="1"
                  max="10"
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
              
              <Button type="submit" className="w-full btn-primary">
                Vahvista varaus
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentForm;
