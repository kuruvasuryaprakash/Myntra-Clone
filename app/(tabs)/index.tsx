import {
  ChevronRight,
  Heart,
  Search,
  ShoppingBag,
  User,
} from "lucide-react-native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const brandDeals = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&auto=format&fit=crop",
    title: "UP TO 60% OFF",
    subtitle: "Off-Duty Styles",
    brand: "H&M",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&auto=format&fit=crop",
    title: "MIN. 50% OFF",
    subtitle: "Tailored Looks",
    brand: "NEXT",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop",
    title: "MIN. 55% OFF",
    subtitle: "Style On Point",
    brand: "LEVI'S",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=700&auto=format&fit=crop",
    title: "MIN. 55% OFF",
    subtitle: "Ethnic Styles",
    brand: "TAAVI",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&auto=format&fit=crop",
    title: "STARTING ₹99",
    subtitle: "Performance Ready",
    brand: "DECATHLON",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop",
    title: "MIN. 50% OFF",
    subtitle: "Classic Collection",
    brand: "METRO",
  },
];

const categories = [
  {
    id: 1,
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Sports Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Shirts",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Kurtas",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Trousers",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Jackets",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Sunglasses",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Watches",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?w=500&auto=format&fit=crop",
  },
];

const deals = [
  {
    id: 1,
    title: "FLAT 50% OFF",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "MIN. 60% OFF",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "UP TO 70% OFF",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&auto=format&fit=crop",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.topHeader}>
          {/* Myntra Logo */}
          <TouchableOpacity style={styles.logoContainer}>
            <Text style={styles.logoM}>M</Text>
          </TouchableOpacity>

          {/* Navigation */}
          <View style={styles.navigation}>
            <TouchableOpacity>
              <Text style={styles.navText}>MEN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navText}>WOMEN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navText}>KIDS</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navText}>HOME</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navText}>BEAUTY</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navText}>GENZ</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navText}>
                STUDIO
                <Text style={styles.newText}> NEW</Text>
              </Text>
            </TouchableOpacity>
          </View>

          {/* Search */}
          <View style={styles.searchBox}>
            <Search size={20} color="#555" />

            <TextInput
              style={styles.searchInput}
              placeholder="Search for products, brands and more"
              placeholderTextColor="#777"
            />
          </View>

          {/* Profile */}
          <TouchableOpacity style={styles.headerIcon}>
            <User size={21} color="#282c3f" />
            <Text style={styles.iconText}>Profile</Text>
          </TouchableOpacity>

          {/* Wishlist */}
          <TouchableOpacity style={styles.headerIcon}>
            <Heart size={21} color="#282c3f" />
            <Text style={styles.iconText}>Wishlist</Text>
          </TouchableOpacity>

          {/* Bag */}
          <TouchableOpacity style={styles.headerIcon}>
            <ShoppingBag size={21} color="#282c3f" />
            <Text style={styles.iconText}>Bag</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* OFFER BANNER */}
        <View style={styles.offerBanner}>
          <View style={styles.offerLeft}>
            <Text style={styles.offerText}>FLAT ₹300 OFF</Text>
          </View>

          <View style={styles.offerRight}>
            <Text style={styles.offerSmall}>On Your 1st Purchase</Text>

            <Text style={styles.offerSmall}>Via Myntra App!</Text>
          </View>
        </View>

        {/* HERO BANNER */}
        <TouchableOpacity activeOpacity={0.9}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop",
            }}
            style={styles.heroImage}
          />

          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>BIG BRANDS</Text>

            <Text style={styles.heroTitle}>BASH</Text>

            <Text style={styles.heroSubtitle}>LIVE NOW</Text>

            <View style={styles.shopButton}>
              <Text style={styles.shopButtonText}>SHOP NOW</Text>

              <ChevronRight size={17} color="#282c3f" />
            </View>
          </View>

          <View style={styles.discountBox}>
            <Text style={styles.discountText}>50-80%</Text>

            <Text style={styles.discountOff}>OFF</Text>

            <Text style={styles.discountSub}>Irresistible Brands,</Text>

            <Text style={styles.discountSub}>Best Prices</Text>
          </View>
        </TouchableOpacity>

        {/* BANK OFFER */}
        <View style={styles.bankOffer}>
          <Text style={styles.bankText}>HSBC</Text>

          <Text style={styles.bankText}>RBL BANK</Text>

          <Text style={styles.bankDivider}>|</Text>

          <Text style={styles.bankOfferText}>Get 10% Instant Discount*</Text>
        </View>

        {/* WOW DEALS */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>WOW DEALS</Text>

          <Text style={styles.sectionSubtitle}>
            Big Brands, Even Bigger Savings
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalContent}
        >
          {brandDeals.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.brandCard}
              activeOpacity={0.85}
            >
              <Image source={{ uri: item.image }} style={styles.brandImage} />

              <View style={styles.brandOverlay}>
                <Text style={styles.brandTitle}>{item.title}</Text>

                <Text style={styles.brandSubtitle}>{item.subtitle}</Text>
              </View>

              <View style={styles.brandBottom}>
                <Text style={styles.brandName}>{item.brand}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* SHOP BY CATEGORY */}
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryMainTitle}>SHOP BY CATEGORY</Text>
        </View>

        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              activeOpacity={0.85}
            >
              <Image
                source={{ uri: category.image }}
                style={styles.categoryImage}
              />

              <View style={styles.categoryBottom}>
                <Text style={styles.categoryName}>{category.name}</Text>

                <Text style={styles.categoryShop}>SHOP NOW</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* DEALS OF THE DAY */}
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryMainTitle}>DEALS OF THE DAY</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalContent}
        >
          {deals.map((deal) => (
            <TouchableOpacity key={deal.id} style={styles.dealCard}>
              <Image source={{ uri: deal.image }} style={styles.dealImage} />

              <View style={styles.dealOverlay}>
                <Text style={styles.dealTitle}>{deal.title}</Text>

                <Text style={styles.dealShop}>SHOP NOW →</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* FOOTER */}
        <View style={styles.footer}>
          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>ONLINE SHOPPING</Text>

            <Text style={styles.footerLink}>Men</Text>
            <Text style={styles.footerLink}>Women</Text>
            <Text style={styles.footerLink}>Kids</Text>
            <Text style={styles.footerLink}>Home</Text>
            <Text style={styles.footerLink}>Beauty</Text>
            <Text style={styles.footerLink}>Genz</Text>
            <Text style={styles.footerLink}>Gift Cards</Text>
            <Text style={styles.footerLink}>Myntra Insider</Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>CUSTOMER POLICIES</Text>

            <Text style={styles.footerLink}>Contact Us</Text>
            <Text style={styles.footerLink}>FAQ</Text>
            <Text style={styles.footerLink}>T&C</Text>
            <Text style={styles.footerLink}>Terms Of Use</Text>
            <Text style={styles.footerLink}>Track Orders</Text>
            <Text style={styles.footerLink}>Shipping</Text>
            <Text style={styles.footerLink}>Cancellation</Text>
            <Text style={styles.footerLink}>Privacy Policy</Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>USEFUL LINKS</Text>

            <Text style={styles.footerLink}>Blog</Text>
            <Text style={styles.footerLink}>Careers</Text>
            <Text style={styles.footerLink}>Site Map</Text>
            <Text style={styles.footerLink}>Corporate Information</Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>EXPERIENCE MYNTRA APP</Text>

            <View style={styles.appButtons}>
              <View style={styles.appButton}>
                <Text style={styles.appButtonText}>Google Play</Text>
              </View>

              <View style={styles.appButton}>
                <Text style={styles.appButtonText}>App Store</Text>
              </View>
            </View>

            <Text style={styles.footerHeading}>KEEP IN TOUCH</Text>

            <Text style={styles.socialText}>
              Facebook Twitter YouTube Instagram
            </Text>
          </View>

          <View style={styles.guarantee}>
            <Text style={styles.guaranteeTitle}>100% ORIGINAL</Text>

            <Text style={styles.guaranteeText}>
              guarantee for all products at myntra.com
            </Text>

            <Text style={styles.guaranteeTitle}>Return within 14 days</Text>

            <Text style={styles.guaranteeText}>of receiving your order</Text>
          </View>
        </View>

        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>
            © 2026 Myntra Clone | Built with React Native
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scrollContent: {
    paddingBottom: 40,
  },

  /* HEADER */

  header: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    elevation: 3,
  },

  topHeader: {
    minHeight: 75,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 14,
  },

  logoContainer: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },

  logoM: {
    fontSize: 38,
    fontWeight: "900",
    color: "#ff3f6c",
    fontStyle: "italic",
  },

  navigation: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },

  navText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#282c3f",
  },

  newText: {
    color: "#ff3f6c",
    fontSize: 8,
  },

  searchBox: {
    flex: 1,
    height: 44,
    minWidth: 180,
    maxWidth: 480,
    backgroundColor: "#f5f5f6",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 4,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: "#282c3f",
  },

  headerIcon: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 42,
  },

  iconText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#282c3f",
    marginTop: 3,
  },

  /* OFFER */

  offerBanner: {
    marginHorizontal: 35,
    marginTop: 20,
    height: 120,
    backgroundColor: "#ff7427",
    flexDirection: "row",
    alignItems: "center",
  },

  offerLeft: {
    flex: 1,
    alignItems: "center",
  },

  offerRight: {
    width: "35%",
    alignItems: "center",
  },

  offerText: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "900",
  },

  offerSmall: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  /* HERO */

  heroImage: {
    width: "100%",
    height: 330,
    marginTop: 12,
  },

  heroOverlay: {
    position: "absolute",
    left: 40,
    top: 85,
  },

  heroTitle: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "900",
    textShadowColor: "#000000",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 4,
  },

  heroSubtitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 5,
  },

  shopButton: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },

  shopButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#282c3f",
  },

  discountBox: {
    position: "absolute",
    right: 45,
    top: 75,
    alignItems: "center",
  },

  discountText: {
    color: "#ffd21f",
    fontSize: 44,
    fontWeight: "900",
  },

  discountOff: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "900",
  },

  discountSub: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },

  /* BANK */

  bankOffer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    backgroundColor: "#ffffff",
  },

  bankText: {
    fontWeight: "900",
    fontSize: 15,
  },

  bankDivider: {
    fontSize: 22,
    color: "#555",
  },

  bankOfferText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#282c3f",
  },

  /* WOW DEALS */

  sectionHeader: {
    backgroundColor: "#fff8eb",
    paddingVertical: 22,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: "#17265d",
  },

  sectionSubtitle: {
    fontSize: 15,
    color: "#282c3f",
    fontWeight: "600",
    marginTop: 3,
  },

  horizontalContent: {
    paddingHorizontal: 20,
    gap: 12,
    paddingVertical: 15,
  },

  brandCard: {
    width: 210,
    height: 300,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eeeeee",
  },

  brandImage: {
    width: "100%",
    height: 225,
  },

  brandOverlay: {
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 50,
    alignItems: "center",
  },

  brandTitle: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 3,
  },

  brandSubtitle: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4,
  },

  brandBottom: {
    height: 75,
    alignItems: "center",
    justifyContent: "center",
  },

  brandName: {
    fontSize: 20,
    fontWeight: "900",
    color: "#282c3f",
  },

  /* CATEGORY */

  categoryHeader: {
    paddingVertical: 35,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  categoryMainTitle: {
    fontSize: 34,
    fontWeight: "900",
    color: "#17265d",
    letterSpacing: 1,
  },

  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingHorizontal: 12,
  },

  categoryCard: {
    width: "30%",
    marginBottom: 20,
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },

  categoryImage: {
    width: "100%",
    height: 190,
  },

  categoryBottom: {
    alignItems: "center",
    paddingVertical: 10,
  },

  categoryName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#282c3f",
  },

  categoryShop: {
    color: "#ff3f6c",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 4,
  },

  /* DEALS */

  dealCard: {
    width: 300,
    height: 190,
    borderRadius: 8,
    overflow: "hidden",
  },

  dealImage: {
    width: "100%",
    height: "100%",
  },

  dealOverlay: {
    position: "absolute",
    left: 20,
    bottom: 20,
  },

  dealTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "900",
  },

  dealShop: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "800",
    marginTop: 5,
  },

  /* FOOTER */

  footer: {
    marginTop: 40,
    backgroundColor: "#fafbfc",
    paddingHorizontal: 30,
    paddingVertical: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 35,
  },

  footerColumn: {
    width: 170,
  },

  footerHeading: {
    fontSize: 12,
    fontWeight: "900",
    color: "#282c3f",
    marginBottom: 15,
  },

  footerLink: {
    fontSize: 13,
    color: "#696e79",
    marginBottom: 9,
  },

  appButtons: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 25,
  },

  appButton: {
    backgroundColor: "#000000",
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 5,
  },

  appButtonText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "700",
  },

  socialText: {
    color: "#696e79",
    fontSize: 12,
    lineHeight: 25,
  },

  guarantee: {
    width: 230,
  },

  guaranteeTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#282c3f",
    marginBottom: 5,
    marginTop: 10,
  },

  guaranteeText: {
    fontSize: 13,
    color: "#696e79",
    lineHeight: 20,
    marginBottom: 15,
  },

  copyright: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
  },

  copyrightText: {
    color: "#696e79",
    fontSize: 12,
  },
});
