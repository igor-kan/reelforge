
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Globe, Target } from "lucide-react";

const VideoShowcase = () => {
  const showcaseVideos = [
    {
      id: 1,
      title: "SaaS Product Launch",
      description: "AI-generated launch video for a productivity app",
      duration: "45s",
      platform: "YouTube",
      industry: "Technology",
      thumbnail: "bg-gradient-to-br from-blue-500 to-purple-600",
      metrics: { views: "2.3M", engagement: "8.2%" }
    },
    {
      id: 2,
      title: "E-commerce Brand Story", 
      description: "Emotional brand video for sustainable fashion",
      duration: "1m 30s",
      platform: "Instagram",
      industry: "Fashion",
      thumbnail: "bg-gradient-to-br from-green-500 to-teal-600",
      metrics: { views: "1.8M", engagement: "12.1%" }
    },
    {
      id: 3,
      title: "Course Promotion",
      description: "Educational content marketing for online course",
      duration: "2m",
      platform: "TikTok", 
      industry: "Education",
      thumbnail: "bg-gradient-to-br from-orange-500 to-red-600",
      metrics: { views: "5.7M", engagement: "15.3%" }
    },
    {
      id: 4,
      title: "Restaurant Opening",
      description: "Local business promotional video",
      duration: "30s",
      platform: "Facebook",
      industry: "Food & Beverage",
      thumbnail: "bg-gradient-to-br from-yellow-500 to-orange-600",
      metrics: { views: "890K", engagement: "9.8%" }
    }
  ];

  return (
    <section id="showcase" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            AI-Generated Video Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how brands across industries are creating stunning videos with ReelForge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseVideos.map((video) => (
            <Card key={video.id} className="bg-white/5 border-white/10 backdrop-blur-lg overflow-hidden group hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className={`relative h-48 ${video.thumbnail} flex items-center justify-center`}>
                  <Button
                    size="lg"
                    className="bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full w-16 h-16 p-0"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </Button>
                  
                  {/* Platform Badge */}
                  <Badge className="absolute top-4 left-4 bg-black/50 text-white border-0">
                    {video.platform}
                  </Badge>
                  
                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{video.title}</h3>
                      <p className="text-gray-300 text-sm">{video.description}</p>
                    </div>
                    <Badge variant="outline" className="text-purple-300 border-purple-400/30 bg-purple-500/10">
                      {video.industry}
                    </Badge>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span className="flex items-center">
                        <Target className="w-4 h-4 mr-1" />
                        {video.metrics.views} views
                      </span>
                      <span className="flex items-center">
                        <Globe className="w-4 h-4 mr-1" />
                        {video.metrics.engagement} engagement
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
