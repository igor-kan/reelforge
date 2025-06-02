
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small businesses and solopreneurs",
      icon: Zap,
      popular: false,
      features: [
        "5 videos per month",
        "Up to 60 seconds duration", 
        "HD quality (1080p)",
        "Basic AI voices",
        "Standard templates",
        "Social media formats",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "99",
      description: "Ideal for growing businesses and content creators",
      icon: Sparkles,
      popular: true,
      features: [
        "25 videos per month",
        "Up to 3 minutes duration",
        "4K quality export",
        "Premium AI voices & avatars",
        "Custom brand templates",
        "All platform formats",
        "Priority support",
        "A/B testing variants",
        "Analytics dashboard"
      ]
    },
    {
      name: "Enterprise",
      price: "299",
      description: "For agencies and large organizations",
      icon: Crown,
      popular: false,
      features: [
        "Unlimited videos",
        "Unlimited duration",
        "8K quality available",
        "White-label option",
        "Team collaboration",
        "API access",
        "Dedicated account manager",
        "Custom AI training",
        "Multi-language support",
        "Advanced analytics"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your video production needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative bg-white/5 border-white/10 backdrop-blur-lg ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-gray-300">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All plans include free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <span>✓ 99.9% Uptime SLA</span>
            <span>✓ Enterprise Security</span>
            <span>✓ GDPR Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
