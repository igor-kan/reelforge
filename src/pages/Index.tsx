
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Clock, Zap, Globe, Video, Users, Target, ChevronRight, Check } from "lucide-react";
import ProjectCreator from "@/components/ProjectCreator";
import VideoShowcase from "@/components/VideoShowcase";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  const [showProjectCreator, setShowProjectCreator] = useState(false);

  if (showProjectCreator) {
    return <ProjectCreator onBack={() => setShowProjectCreator(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">ReelForge</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#showcase" className="text-gray-300 hover:text-white transition-colors">Showcase</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                Sign In
              </Button>
              <Button 
                onClick={() => setShowProjectCreator(true)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Start Creating
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Video Production Studio
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Instant Cinematic Video
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                No Camera, No Crew
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into professional marketing videos in minutes. 
              Our AI handles script writing, visual generation, voiceovers, and editing — 
              delivering studio-quality results at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                onClick={() => setShowProjectCreator(true)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Create Your First Video
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10 text-lg px-8 py-6"
              >
                Watch Demo
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5min</div>
                <div className="text-gray-400">Average Production Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-400">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400">Videos Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete AI Production Pipeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From brief to broadcast-ready video in one seamless workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <Target className="w-10 h-10 text-purple-400 mb-4" />
                <CardTitle className="text-white">Smart Brief Analysis</CardTitle>
                <CardDescription className="text-gray-300">
                  AI analyzes your goals, audience, and brand to craft the perfect video concept
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <Zap className="w-10 h-10 text-blue-400 mb-4" />
                <CardTitle className="text-white">Instant Script Generation</CardTitle>
                <CardDescription className="text-gray-300">
                  Professional scripts with hooks, storytelling, and compelling CTAs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <Video className="w-10 h-10 text-green-400 mb-4" />
                <CardTitle className="text-white">AI Visual Creation</CardTitle>
                <CardDescription className="text-gray-300">
                  Generate stunning visuals, scenes, and animations from text descriptions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <Users className="w-10 h-10 text-orange-400 mb-4" />
                <CardTitle className="text-white">Voice & Avatar Engine</CardTitle>
                <CardDescription className="text-gray-300">
                  Realistic AI voices and optional AI presenters in multiple languages
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <Clock className="w-10 h-10 text-pink-400 mb-4" />
                <CardTitle className="text-white">Auto-Editing Suite</CardTitle>
                <CardDescription className="text-gray-300">
                  Professional cuts, transitions, music sync, and subtitle generation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <Globe className="w-10 h-10 text-cyan-400 mb-4" />
                <CardTitle className="text-white">Multi-Platform Export</CardTitle>
                <CardDescription className="text-gray-300">
                  Optimized formats for YouTube, TikTok, Instagram, and more
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <VideoShowcase />

      {/* Pricing */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Replace Your Creative Agency?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of brands creating professional videos with AI
          </p>
          <Button 
            size="lg" 
            onClick={() => setShowProjectCreator(true)}
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Start Your First Project
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Video className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ReelForge</span>
            </div>
            <p className="text-gray-400">© 2024 ReelForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
