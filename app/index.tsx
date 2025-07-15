import { Image, Pressable, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function RootPage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Navbar */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("@/assets/images/manus-logo.png")} style={{ height: 36, width: 36 }} />
            <Text style={{ fontWeight: "bold" }}>manus</Text>
          </View>
          <Entypo name="menu" size={24} />
        </View>

        {/* Container 1 */}
        <View style={{ paddingHorizontal: 20, gap: 24, justifyContent: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "700", textAlign: "center" }}>Leave it to Manus</Text>
          <Text style={{ fontSize: 14, fontWeight: "400", textAlign: "center", color: "gray" }}>
            Manus is a general AI agent that bridges minds and actions: it doesn't just think, it delivers results. Manus excels at various tasks in work and life, getting everything done while you rest.
          </Text>
          <Image source={require("@/assets/images/home.webp")} style={{ height: 200, width: "100%", borderRadius: 8 }} />
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 16 }}>
            <TouchableOpacity style={{ backgroundColor: "black", padding: 12, borderRadius: 20, paddingHorizontal: 20 }}>
              <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>Try Manus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "lightgray", padding: 12, borderRadius: 20, paddingHorizontal: 20 }}>
              <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Use Cases Section */}
        <View style={{ marginTop: 48 }}>
          <Text style={{ fontSize: 26, fontWeight: "700", textAlign: "center" }}>Explore use cases from our official collection</Text>
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray", marginTop: 8 }}>Learn how Manus handles real-world through step by step replays</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginVertical: 16 }}>
            {["Featured", "Research", "Life", "Data Analyst", "Education"].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor: index === 0 ? "black" : "white",
                  paddingVertical: 4,
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: "black",
                  margin: 4,
                }}
              >
                <Text style={{ color: index === 0 ? "white" : "black", fontSize: 14 }}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Use Case Cards */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            {[
              {
                title: "Explore use cases from our official collection",
                desc: "Manus integrates comprehensive travel information to create personalized itineraries and produces a custom travel handbook tailored specifically for your Japanese adventure.",
                icon: require("@/assets/images/book.png"),
              },
              {
                title: "Interactive course on the momentum theorem",
                desc: "Manus develops engaging video presentations for middle school educators, clearly explaining the momentum theorem through accessible and educational content.",
                icon: require("@/assets/images/settings.png"),
              },
              {
                title: "Comparative analysis of insurance policies",
                desc: "Looking to compare insurance options? Manus generates clear, structured comparison tables highlighting key policy information with optimal recommendations tailored to your needs.",
                icon: require("@/assets/images/chart-area-line.png"),
              },
              {
                title: "B2B supplier sourcing",
                desc: "Manus conducts comprehensive research across extensive networks to identify the most suitable suppliers for your specific requirements. As your dedicated agent, Manus works exclusively in your best interest.",
                icon: require("@/assets/images/chart-pie.png"),
              },
            ].map((card, index) => (
              <View
                key={index}
                style={{
                  width: "48%",
                  backgroundColor: "white",
                  padding: 12,
                  borderRadius: 12,
                  marginBottom: 16,
                  borderWidth: 1,
                }}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: "#F2F2F2",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <Image source={card.icon} style={{ width: 24, height: 24 }} />
                </View>
                <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{card.title}</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>{card.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Events Section */}
        <View style={{ marginTop: 48 }}>
          <Text style={{ fontSize: 26, fontWeight: "700", textAlign: "center" }}>Events</Text>
          <Text style={{ fontSize: 14, color: "gray", textAlign: "center", marginVertical: 10 }}>
            Join our community events to learn more about Manus AI and connect with other enthusiasts.
          </Text>

          {[
            {
              title: "Vibe Coding For Startups With Manus",
              date: "May 3 2025",
              image: require("@/assets/images/blog-image-1.avif"),
            },
            {
              title: "Manus Meetup Melbourne",
              date: "Apr 28 2025",
              image: require("@/assets/images/blog-image-3.avif"),
            },
            {
              title: "Manus Meetup Sydney",
              date: "Apr 29 2025",
              image: require("@/assets/images/blog-image-2.avif"),
            },
          ].map((event, index) => (
            <View key={index} style={{ marginBottom: 24 }}>
              <Image source={event.image} style={{ width: "100%", height: 200, borderRadius: 8 }} />
              <Text style={{ fontWeight: "600", marginTop: 8 }}>{event.title}</Text>
              <Text style={{ fontSize: 12, color: "gray" }}>{event.date}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={{ marginTop: 48, paddingBottom: 32 }}>
          {["Company", "Resources", "Community"].map((section, index) => (
            <View key={index} style={{ marginBottom: 20 }}>
              <Text style={{ fontWeight: "bold", marginBottom: 6 }}>{section}</Text>
              {["About Us", "Feedback", "Media inquiries", "Contact Us", "Careers"].map((item, i) => (
                <Text key={i} style={{ color: "gray", fontSize: 13 }}>
                  {item}
                </Text>
              ))}
            </View>
          ))}

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("@/assets/images/manus-logo.png")} style={{ height: 36, width: 36 }} />
            <Text style={{ fontWeight: "bold" }}>manus</Text>
          </View>
          <Text style={{ color: "gray", fontSize: 13, marginTop: 20 }}>©2025 Manus AI{"\n"}Headquartered in Singapore</Text>

          {/* Footer Icons */}
          <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
            <Image source={require("@/assets/images/brand-linkedin.png")} style={{ width: 24, height: 24 }} />
            <Image source={require("@/assets/images/brand-instagram.png")} style={{ width: 24, height: 24 }} />
            <Image source={require("@/assets/images/brand-x.png")} style={{ width: 24, height: 24 }} />
            <Image source={require("@/assets/images/brand-tiktok.png")} style={{ width: 24, height: 24 }} />
            <Image source={require("@/assets/images/brand-youtube.png")} style={{ width: 24, height: 24 }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}