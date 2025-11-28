import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function PriceCalculator() {
  const [workType, setWorkType] = useState("graphic");
  const [license, setLicense] = useState("personal");
  const [urgent, setUrgent] = useState(false);
  const [extraRevisions, setExtraRevisions] = useState(0);

  const basePrices: Record<string, number> = {
    graphic: 1000,
    series: 2200,
  };

  const licenseMultipliers: Record<string, number> = {
    personal: 1,
    commercial: 2,
    exclusive: 3,
  };

  const calculatePrice = () => {
    let price = basePrices[workType] || 0;
    price *= licenseMultipliers[license] || 1;
    if (urgent) price *= 1.5;
    price += extraRevisions * (basePrices[workType] * 0.2);
    return Math.round(price);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="p-8 border-border">
      <h3 className="text-2xl font-light mb-8">Калькулятор стоимости</h3>
      
      <div className="space-y-8">
        <div>
          <Label className="text-sm mb-4 block">Тип работы</Label>
          <RadioGroup value={workType} onValueChange={setWorkType}>
            <div className="flex items-center space-x-3 mb-3">
              <RadioGroupItem value="graphic" id="graphic" />
              <Label htmlFor="graphic" className="font-normal cursor-pointer">
                Графика / Иллюстрация (от 1 000 ₽)
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="series" id="series" />
              <Label htmlFor="series" className="font-normal cursor-pointer">
                Парная работа (от 2 200 ₽)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm mb-4 block">Тип лицензии</Label>
          <RadioGroup value={license} onValueChange={setLicense}>
            <div className="flex items-center space-x-3 mb-3">
              <RadioGroupItem value="personal" id="personal" />
              <Label htmlFor="personal" className="font-normal cursor-pointer">
                Личное использование (×1)
              </Label>
            </div>
            <div className="flex items-center space-x-3 mb-3">
              <RadioGroupItem value="commercial" id="commercial" />
              <Label htmlFor="commercial" className="font-normal cursor-pointer">
                Коммерческая (×2)
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="exclusive" id="exclusive" />
              <Label htmlFor="exclusive" className="font-normal cursor-pointer">
                Эксклюзив (×3)
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-sm mb-4 block">Дополнительно</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="urgent" 
                checked={urgent}
                onCheckedChange={(checked) => setUrgent(checked as boolean)}
              />
              <Label htmlFor="urgent" className="font-normal cursor-pointer">
                Срочное выполнение (+50%)
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox 
                id="revisions" 
                checked={extraRevisions > 0}
                onCheckedChange={(checked) => setExtraRevisions(checked ? 1 : 0)}
              />
              <Label htmlFor="revisions" className="font-normal cursor-pointer">
                Дополнительный раунд правок (+20%)
              </Label>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Примерная стоимость</span>
            <span className="text-3xl font-light">{formatPrice(calculatePrice())}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Финальная стоимость определяется после брифа и обсуждения деталей проекта
          </p>
        </div>
      </div>
    </Card>
  );
}