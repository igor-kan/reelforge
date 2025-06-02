
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Target, Clock, Palette, Globe, Wand2 } from "lucide-react";

interface ProjectCreatorProps {
  onBack: () => void;
}

const ProjectCreator = ({ onBack }: ProjectCreatorProps) => {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    targetAudience: '',
    duration: '',
    tone: '',
    platform: '',
    goals: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Simulate AI suggestions based on input
    if (field === 'description' && value.length > 10) {
      setAiSuggestions([
        "Consider highlighting key benefits early",
        "Add emotional hook in first 3 seconds",
        "Include clear call-to-action"
      ]);
    }
  };

  const steps = [
    { id: 1, title: "Project Brief", icon: Target },
    { id: 2, title: "Style & Format", icon: Palette },
    { id: 3, title: "AI Generation", icon: Wand2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-white hover:bg-white/10 mr-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <span className="text-xl font-semibold text-white">Create New Video Project</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= step.id 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                  : 'bg-white/10 text-gray-400'
              }`}>
                <step.icon className="w-5 h-5" />
              </div>
              <span className={`ml-2 text-sm font-medium ${
                currentStep >= step.id ? 'text-white' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className={`w-12 h-0.5 mx-4 ${
                  currentStep > step.id ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-white/10'
                }`} />
              )}
            </div>
          ))}
        </div>

        {currentStep === 1 && (
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-purple-400" />
                Project Brief
              </CardTitle>
              <CardDescription className="text-gray-300">
                Tell us about your video project and we'll create the perfect content strategy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="projectName" className="text-white">Project Name</Label>
                <Input
                  id="projectName"
                  placeholder="e.g., Product Launch Campaign"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange('projectName', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-white">Product/Service Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what you're promoting, key features, and unique selling points..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
                {aiSuggestions.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {aiSuggestions.map((suggestion, index) => (
                      <Badge key={index} variant="outline" className="text-purple-300 border-purple-400/30 bg-purple-500/10">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {suggestion}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="targetAudience" className="text-white">Target Audience</Label>
                <Input
                  id="targetAudience"
                  placeholder="e.g., Small business owners, 25-45, tech-savvy"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  value={formData.targetAudience}
                  onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="goals" className="text-white">Video Goals</Label>
                <Textarea
                  id="goals"
                  placeholder="What action do you want viewers to take? (e.g., sign up, purchase, learn more)"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                />
              </div>

              <Button 
                onClick={() => setCurrentStep(2)}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                disabled={!formData.projectName || !formData.description}
              >
                Continue to Style & Format
              </Button>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Palette className="w-5 h-5 mr-2 text-blue-400" />
                Style & Format
              </CardTitle>
              <CardDescription className="text-gray-300">
                Choose the perfect style and format for your video
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-white">Video Duration</Label>
                  <Select onValueChange={(value) => handleInputChange('duration', value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15s">15 seconds (Ads)</SelectItem>
                      <SelectItem value="30s">30 seconds (Social)</SelectItem>
                      <SelectItem value="60s">1 minute (Explainer)</SelectItem>
                      <SelectItem value="2-3min">2-3 minutes (Tutorial)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white">Primary Platform</Label>
                  <Select onValueChange={(value) => handleInputChange('platform', value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="youtube">YouTube (16:9)</SelectItem>
                      <SelectItem value="tiktok">TikTok (9:16)</SelectItem>
                      <SelectItem value="instagram">Instagram (9:16)</SelectItem>
                      <SelectItem value="facebook">Facebook (1:1)</SelectItem>
                      <SelectItem value="linkedin">LinkedIn (16:9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label className="text-white">Video Tone</Label>
                <Select onValueChange={(value) => handleInputChange('tone', value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional & Trustworthy</SelectItem>
                    <SelectItem value="energetic">Energetic & Exciting</SelectItem>
                    <SelectItem value="friendly">Friendly & Conversational</SelectItem>
                    <SelectItem value="dramatic">Dramatic & Cinematic</SelectItem>
                    <SelectItem value="educational">Educational & Informative</SelectItem>
                    <SelectItem value="humorous">Fun & Humorous</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  Back
                </Button>
                <Button 
                  onClick={() => setCurrentStep(3)}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  disabled={!formData.duration || !formData.platform || !formData.tone}
                >
                  Generate Video
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Wand2 className="w-5 h-5 mr-2 text-green-400" />
                AI Generation in Progress
              </CardTitle>
              <CardDescription className="text-gray-300">
                Creating your professional video with AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  { step: "Analyzing brief & generating script", completed: true },
                  { step: "Creating visual storyboard", completed: true },
                  { step: "Generating video scenes", completed: false, current: true },
                  { step: "Adding voiceover & music", completed: false },
                  { step: "Final editing & export", completed: false }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${
                      item.completed ? 'bg-green-500' : 
                      item.current ? 'bg-blue-500 animate-pulse' : 'bg-white/20'
                    }`} />
                    <span className={`${
                      item.completed ? 'text-green-300' : 
                      item.current ? 'text-blue-300' : 'text-gray-400'
                    }`}>
                      {item.step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                <h4 className="text-white font-medium mb-2">Generated Script Preview:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  "Tired of spending weeks on video production? Introducing {formData.projectName} - 
                  the game-changing solution that transforms your {formData.description.split(' ').slice(0, 5).join(' ')}... 
                  Perfect for {formData.targetAudience}, this innovative approach delivers results in minutes, not months."
                </p>
              </div>

              <p className="text-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 inline mr-1" />
                Estimated completion: 3-5 minutes
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectCreator;
