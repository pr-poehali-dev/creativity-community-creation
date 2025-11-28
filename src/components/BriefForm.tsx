import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function BriefForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    workType: "",
    description: "",
    deadline: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Бриф отправлен",
      description: "Мы свяжемся с вами в течение 24-48 часов",
    });

    setFormData({
      name: "",
      contact: "",
      workType: "",
      description: "",
      deadline: "",
      budget: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="p-8 border-border">
      <h3 className="text-2xl font-light mb-8">Отправить бриф</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm mb-2 block">
            Имя или псевдоним
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border-border"
          />
        </div>

        <div>
          <Label htmlFor="contact" className="text-sm mb-2 block">
            Telegram или ВКонтакте
          </Label>
          <Input
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="border-border"
            placeholder="@username или vk.com/username"
          />
        </div>

        <div>
          <Label htmlFor="workType" className="text-sm mb-2 block">
            Тип работы
          </Label>
          <Input
            id="workType"
            name="workType"
            value={formData.workType}
            onChange={handleChange}
            required
            className="border-border"
            placeholder="Графика, живопись, серия..."
          />
        </div>

        <div>
          <Label htmlFor="description" className="text-sm mb-2 block">
            Описание проекта
          </Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border-border min-h-32"
            placeholder="Опишите идею, стиль, формат, назначение работы, добавьте ссылки на референсы"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="deadline" className="text-sm mb-2 block">
              Желаемый срок
            </Label>
            <Input
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="border-border"
              placeholder="Например: 2 недели"
            />
          </div>

          <div>
            <Label htmlFor="budget" className="text-sm mb-2 block">
              Бюджет
            </Label>
            <Input
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="border-border"
              placeholder="Ориентировочная сумма"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-foreground text-background hover:bg-foreground/90 h-12"
        >
          Отправить бриф
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Ответ на бриф в течение 2-3 дней. Все данные конфиденциальны.
        </p>
      </form>
    </Card>
  );
}