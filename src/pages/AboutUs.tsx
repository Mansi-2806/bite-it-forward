
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-sharebite-dark">About ShareBite</h1>
          <p className="mt-4 text-xl text-gray-600">"From Surplus to Support: Bridging Food and Need"</p>
          <div className="mt-4 inline-block h-1 w-16 bg-sharebite-red"></div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-sharebite-dark">Our Mission</h2>
            <p className="text-gray-700">
              At ShareBite, our mission is to connect surplus food from restaurants, households, grocery stores, and vegetable shops with local food banks and those in need. We aim to reduce food waste while addressing hunger in our communities through an efficient and sustainable food redistribution network.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-sharebite-dark">Our Approach</h2>
            <p className="text-gray-700 mb-4">
              We believe that every bite counts. Through our platform, we facilitate the collection and redistribution of surplus food that would otherwise go to waste. Our approach is three-fold:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <Card className="bg-sharebite-beige border-none">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Collect</h3>
                  <p className="text-gray-700">
                    We connect donors with delivery partners to collect surplus food from various sources in a timely manner.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-sharebite-beige border-none">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Redistribute</h3>
                  <p className="text-gray-700">
                    Edible food is quickly distributed to food banks, NGOs, and individuals in need within the community.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-sharebite-beige border-none">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Repurpose</h3>
                  <p className="text-gray-700">
                    Inedible food waste is converted into organic fertilizers to support local farmers and reduce landfill waste.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-sharebite-dark">Our Impact</h2>
            <p className="text-gray-700 mb-6">
              Since our inception, ShareBite has made significant strides in addressing food waste and hunger:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white shadow-sm rounded-lg">
                <h4 className="text-3xl font-bold text-sharebite-red">5,000+</h4>
                <p className="text-gray-600">Meals Shared</p>
              </div>
              
              <div className="text-center p-4 bg-white shadow-sm rounded-lg">
                <h4 className="text-3xl font-bold text-sharebite-red">120+</h4>
                <p className="text-gray-600">Partner Restaurants</p>
              </div>
              
              <div className="text-center p-4 bg-white shadow-sm rounded-lg">
                <h4 className="text-3xl font-bold text-sharebite-red">50+</h4>
                <p className="text-gray-600">Food Banks</p>
              </div>
              
              <div className="text-center p-4 bg-white shadow-sm rounded-lg">
                <h4 className="text-3xl font-bold text-sharebite-red">2,000+</h4>
                <p className="text-gray-600">Volunteer Hours</p>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-sharebite-dark">Our Commitment</h2>
            <p className="text-gray-700">
              We are committed to building a sustainable food ecosystem that benefits everyone involved:
            </p>
            
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
              <li><strong>For Donors:</strong> We provide an easy way to reduce waste and give back to the community, with recognition and rewards.</li>
              <li><strong>For Recipients:</strong> We ensure reliable access to quality food for those in need.</li>
              <li><strong>For the Environment:</strong> We significantly reduce food waste that would otherwise contribute to greenhouse gas emissions.</li>
              <li><strong>For Volunteers:</strong> We create meaningful opportunities to make a direct impact in the community.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-sharebite-dark">Join Our Movement</h2>
            <p className="text-gray-700">
              Whether you're a restaurant, grocery store, individual with surplus food, or someone looking to volunteer, your contribution matters. Join the ShareBite movement today and help us bridge the gap between food surplus and need.
            </p>
            
            <p className="mt-4 text-gray-700">
              Together, we can create a world where no edible food goes to waste and no one goes hungry.
            </p>
            
            <p className="mt-4 text-lg font-medium text-sharebite-red">
              Every bite counts—pass it on.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
