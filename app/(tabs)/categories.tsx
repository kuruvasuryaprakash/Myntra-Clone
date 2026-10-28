import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  ChevronDown,
  ChevronRight,
  Heart,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react-native";

/* =========================================================
   DYNAMIC CATEGORY DATA
========================================================= */

const menuData = {
  MEN: [
    {
      title: "Topwear",
      items: [
        "T-Shirts",
        "Casual Shirts",
        "Formal Shirts",
        "Sweatshirts",
        "Sweaters",
        "Jackets",
        "Blazers & Coats",
        "Suits",
        "Rain Jackets",
      ],
    },
    {
      title: "Bottomwear",
      items: [
        "Jeans",
        "Casual Trousers",
        "Formal Trousers",
        "Shorts",
        "Track Pants & Joggers",
      ],
    },
    {
      title: "Innerwear & Sleepwear",
      items: [
        "Briefs & Trunks",
        "Boxers",
        "Vests",
        "Sleepwear & Loungewear",
        "Thermals",
      ],
    },
    {
      title: "Footwear",
      items: [
        "Casual Shoes",
        "Sports Shoes",
        "Formal Shoes",
        "Sneakers",
        "Sandals & Floaters",
        "Flip Flops",
        "Socks",
      ],
    },
    {
      title: "Indian & Festive Wear",
      items: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"],
    },
    {
      title: "Sports & Active Wear",
      items: [
        "Sports Shoes",
        "Sports Sandals",
        "Active T-Shirts",
        "Track Pants & Shorts",
        "Tracksuits",
        "Jackets & Sweatshirts",
        "Sports Accessories",
        "Swimwear",
      ],
    },
    {
      title: "Fashion Accessories",
      items: [
        "Wallets",
        "Belts",
        "Perfumes & Body Mists",
        "Trimmers",
        "Deodorants",
        "Ties, Cufflinks & Pocket Squares",
        "Caps & Hats",
        "Mufflers, Scarves & Gloves",
        "Phone Cases",
        "Rings & Wristwear",
        "Helmets",
      ],
    },
    {
      title: "Gadgets",
      items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    },
    {
      title: "Personal Care & Grooming",
      items: ["Face Care", "Hair Care", "Body Care", "Beard Care"],
    },
    {
      title: "Watches",
      items: ["Analog Watches", "Digital Watches", "Smart Watches"],
    },
    {
      title: "Bags & Backpacks",
      items: ["Backpacks", "Laptop Bags", "Travel Bags"],
    },
  ],

  WOMEN: [
    {
      title: "Indian & Fusion Wear",
      items: [
        "Kurtas & Suits",
        "Kurtis, Tunics & Tops",
        "Sarees",
        "Ethnic Wear",
        "Leggings, Salwars & Churidars",
        "Skirts & Palazzos",
        "Dress Materials",
        "Lehenga Cholis",
        "Dupattas & Shawls",
        "Jackets",
      ],
    },
    {
      title: "Western Wear",
      items: [
        "Dresses",
        "Tops",
        "Tshirts",
        "Jeans",
        "Trousers & Capris",
        "Shorts & Skirts",
        "Co-ords",
        "Playsuits",
        "Jumpsuits",
        "Shrugs",
        "Sweaters & Sweatshirts",
        "Jackets & Coats",
        "Blazers & Waistcoats",
      ],
    },
    {
      title: "Maternity",
      items: ["Maternity Dresses", "Maternity Tops", "Maternity Jeans"],
    },
    {
      title: "Footwear",
      items: [
        "Flats",
        "Casual Shoes",
        "Heels",
        "Boots",
        "Sports Shoes & Floaters",
        "Sandals",
      ],
    },
    {
      title: "Lingerie & Sleepwear",
      items: [
        "Bra",
        "Briefs",
        "Shapewear",
        "Sleepwear & Loungewear",
        "Swimwear",
        "Camisoles & Thermals",
      ],
    },
    {
      title: "Beauty & Personal Care",
      items: [
        "Makeup",
        "Skincare",
        "Premium Beauty",
        "Lipsticks",
        "Fragrances",
      ],
    },
    {
      title: "Gadgets",
      items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    },
    {
      title: "Jewellery",
      items: [
        "Fashion Jewellery",
        "Fine Jewellery",
        "Earrings",
        "Necklaces",
        "Bracelets",
      ],
    },
    {
      title: "Bags",
      items: ["Handbags", "Backpacks", "Clutches", "Wallets"],
    },
    {
      title: "Watches",
      items: ["Analog Watches", "Smart Watches"],
    },
    {
      title: "Sports & Active Wear",
      items: [
        "Sports Clothing",
        "Sports Shoes",
        "Sports Accessories",
        "Sports Equipment",
      ],
    },
  ],

  KIDS: [
    {
      title: "Boys Clothing",
      items: [
        "T-Shirts",
        "Shirts",
        "Jeans",
        "Trousers",
        "Shorts",
        "Ethnic Wear",
        "Jackets",
      ],
    },
    {
      title: "Girls Clothing",
      items: [
        "Dresses",
        "Tops",
        "T-Shirts",
        "Jeans",
        "Skirts",
        "Ethnic Wear",
        "Jumpsuits",
      ],
    },
    {
      title: "Footwear",
      items: ["Casual Shoes", "Sports Shoes", "Sandals", "Flip Flops"],
    },
    {
      title: "Toys",
      items: [
        "Learning Toys",
        "Remote Control Toys",
        "Soft Toys",
        "Games",
        "Puzzles",
      ],
    },
    {
      title: "Kids Accessories",
      items: [
        "School Bags",
        "Watches",
        "Sunglasses",
        "Caps",
        "Hair Accessories",
      ],
    },
  ],

  HOME: [
    {
      title: "Bed Linen",
      items: [
        "Bedsheets",
        "Bed Covers",
        "Blankets",
        "Pillows",
        "Pillow Covers",
      ],
    },
    {
      title: "Bath",
      items: ["Bath Towels", "Hand Towels", "Bath Mats", "Bath Robes"],
    },
    {
      title: "Home Decor",
      items: [
        "Wall Decor",
        "Clocks",
        "Photo Frames",
        "Candles",
        "Vases",
        "Plants",
      ],
    },
    {
      title: "Kitchen & Dining",
      items: ["Dinner Sets", "Cups & Mugs", "Glassware", "Cookware", "Storage"],
    },
    {
      title: "Furniture",
      items: ["Sofas", "Tables", "Chairs", "Bean Bags"],
    },
  ],

  BEAUTY: [
    {
      title: "Makeup",
      items: [
        "Lipstick",
        "Foundation",
        "Mascara",
        "Eyeliner",
        "Blush",
        "Compact",
      ],
    },
    {
      title: "Skincare",
      items: ["Face Wash", "Moisturizers", "Serums", "Sunscreen", "Face Masks"],
    },
    {
      title: "Haircare",
      items: ["Shampoo", "Conditioner", "Hair Oil", "Hair Styling"],
    },
    {
      title: "Fragrances",
      items: ["Perfumes", "Body Mists", "Deodorants"],
    },
    {
      title: "Personal Care",
      items: ["Bath & Body", "Oral Care", "Men's Grooming"],
    },
  ],

  GENZ: [
    {
      title: "Trending Now",
      items: [
        "Oversized T-Shirts",
        "Cargo Pants",
        "Baggy Jeans",
        "Crop Tops",
        "Co-ords",
      ],
    },
    {
      title: "Streetwear",
      items: ["Hoodies", "Sweatshirts", "Graphic Tees", "Sneakers", "Caps"],
    },
    {
      title: "Accessories",
      items: ["Sunglasses", "Chains", "Rings", "Bracelets", "Crossbody Bags"],
    },
  ],

  STUDIO: [
    {
      title: "Myntra Studio",
      items: [
        "Fashion Videos",
        "Style Tips",
        "Celebrity Looks",
        "Fashion Trends",
      ],
    },
    {
      title: "Explore",
      items: [
        "New Arrivals",
        "Trending Styles",
        "Editor's Picks",
        "Influencer Looks",
      ],
    },
  ],
};

/* =========================================================
   NAVIGATION
========================================================= */

const navigationItems = [
  "MEN",
  "WOMEN",
  "KIDS",
  "HOME",
  "BEAUTY",
  "GENZ",
  "STUDIO",
];

/* =========================================================
   MAIN SCREEN
========================================================= */

export default function TabTwoScreen() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const currentMenu =
    activeMenu && activeMenu in menuData
      ? menuData[activeMenu as keyof typeof menuData]
      : [];

  const handleMenuPress = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleCategoryPress = (category: string) => {
    console.log("Selected category:", category);

    // Later you can navigate to:
    // router.push(...)
  };

  return (
    <View style={styles.container}>
      {/* =================================================
          HEADER
      ================================================= */}

      <View style={styles.header}>
        {/* LOGO */}

        <Pressable
          style={styles.logoContainer}
          onPress={() => setActiveMenu(null)}
        >
          <Text style={styles.logoText}>M</Text>
        </Pressable>

        {/* NAVIGATION */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.navScroll}
          contentContainerStyle={styles.navContent}
        >
          {navigationItems.map((item) => (
            <Pressable
              key={item}
              style={[
                styles.navItem,
                activeMenu === item && styles.activeNavItem,
              ]}
              onPress={() => handleMenuPress(item)}
            >
              <Text
                style={[
                  styles.navText,
                  activeMenu === item && styles.activeNavText,
                ]}
              >
                {item}
              </Text>

              {item === "STUDIO" && <Text style={styles.newText}>NEW</Text>}
            </Pressable>
          ))}
        </ScrollView>

        {/* SEARCH */}

        <View style={styles.searchBox}>
          <Search size={19} color="#666" />

          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search for products, brands and more"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />

          {searchText.length > 0 && (
            <Pressable onPress={() => setSearchText("")}>
              <X size={18} color="#666" />
            </Pressable>
          )}
        </View>

        {/* PROFILE */}

        <Pressable style={styles.headerAction}>
          <User size={21} color="#282c3f" />
          <Text style={styles.actionText}>Profile</Text>
        </Pressable>

        {/* WISHLIST */}

        <Pressable style={styles.headerAction}>
          <Heart size={21} color="#282c3f" />
          <Text style={styles.actionText}>Wishlist</Text>
        </Pressable>

        {/* BAG */}

        <Pressable style={styles.headerAction}>
          <ShoppingBag size={21} color="#282c3f" />
          <Text style={styles.actionText}>Bag</Text>
        </Pressable>
      </View>

      {/* =================================================
          DYNAMIC MEGA MENU
      ================================================= */}

      {activeMenu && (
        <>
          {/* Dark overlay */}

          <Pressable
            style={styles.overlay}
            onPress={() => setActiveMenu(null)}
          />

          {/* Mega menu */}

          <View style={styles.megaMenu}>
            {/* Menu Header */}

            <View style={styles.megaHeader}>
              <Text style={styles.megaTitle}>{activeMenu}</Text>

              <Pressable
                onPress={() => setActiveMenu(null)}
                style={styles.closeButton}
              >
                <X size={21} color="#282c3f" />
              </Pressable>
            </View>

            {/* Columns */}

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.columnsContainer}
            >
              {currentMenu.map((column, index) => (
                <View
                  key={`${column.title}-${index}`}
                  style={styles.menuColumn}
                >
                  <Text style={styles.columnTitle}>{column.title}</Text>

                  {column.items.map((item) => (
                    <Pressable
                      key={item}
                      style={styles.menuItem}
                      onPress={() => handleCategoryPress(item)}
                    >
                      <Text style={styles.menuItemText}>{item}</Text>

                      <ChevronRight
                        size={13}
                        color="#aaa"
                        style={styles.itemArrow}
                      />
                    </Pressable>
                  ))}
                </View>
              ))}
            </ScrollView>

            {/* Bottom */}

            <Pressable
              style={styles.viewAllButton}
              onPress={() => setActiveMenu(null)}
            >
              <Text style={styles.viewAllText}>VIEW ALL {activeMenu} →</Text>
            </Pressable>
          </View>
        </>
      )}

      {/* =================================================
          PAGE CONTENT
      ================================================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pageContent}
      >
        <Text style={styles.pageTitle}>Explore Categories</Text>

        <Text style={styles.pageSubtitle}>
          Discover the latest fashion, trends and styles
        </Text>

        {/* CATEGORY QUICK BUTTONS */}

        <View style={styles.quickCategories}>
          {navigationItems.map((item) => (
            <Pressable
              key={item}
              style={styles.quickCategory}
              onPress={() => handleMenuPress(item)}
            >
              <Text style={styles.quickCategoryText}>{item}</Text>

              <ChevronDown size={15} color="#ff3f6c" />
            </Pressable>
          ))}
        </View>

        {/* FEATURED SECTION */}

        <View style={styles.featured}>
          <Text style={styles.featuredTitle}>BIGGEST DEALS ON TOP STYLES</Text>

          <Text style={styles.featuredSubtitle}>
            Shop the latest collections
          </Text>
        </View>

        {/* CATEGORY CARDS */}

        <View style={styles.cardGrid}>
          {[
            "Men Fashion",
            "Women Fashion",
            "Kids Fashion",
            "Home",
            "Beauty",
            "Accessories",
          ].map((item) => (
            <Pressable key={item} style={styles.categoryCard}>
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.cardLetter}>{item.charAt(0)}</Text>
              </View>

              <Text style={styles.cardTitle}>{item}</Text>

              <Text style={styles.shopNow}>SHOP NOW →</Text>
            </Pressable>
          ))}
        </View>

        {/* FOOTER */}

        <View style={styles.footer}>
          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>ONLINE SHOPPING</Text>

            <Text style={styles.footerItem}>Men</Text>
            <Text style={styles.footerItem}>Women</Text>
            <Text style={styles.footerItem}>Kids</Text>
            <Text style={styles.footerItem}>Home</Text>
            <Text style={styles.footerItem}>Beauty</Text>
            <Text style={styles.footerItem}>Genz</Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>CUSTOMER POLICIES</Text>

            <Text style={styles.footerItem}>Contact Us</Text>

            <Text style={styles.footerItem}>FAQ</Text>

            <Text style={styles.footerItem}>T&C</Text>

            <Text style={styles.footerItem}>Track Orders</Text>

            <Text style={styles.footerItem}>Shipping</Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>USEFUL LINKS</Text>

            <Text style={styles.footerItem}>Blog</Text>

            <Text style={styles.footerItem}>Careers</Text>

            <Text style={styles.footerItem}>Site Map</Text>

            <Text style={styles.footerItem}>Corporate Information</Text>
          </View>

          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>EXPERIENCE MYNTRA APP</Text>

            <Text style={styles.footerItem}>Google Play</Text>

            <Text style={styles.footerItem}>App Store</Text>

            <Text style={styles.footerHeading}>KEEP IN TOUCH</Text>

            <Text style={styles.footerItem}>
              Facebook • Instagram • YouTube
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

/* =========================================================
   STYLES
========================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* HEADER */

  header: {
    minHeight: 76,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    elevation: 4,
    zIndex: 100,
  },

  logoContainer: {
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  logoText: {
    fontSize: 40,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#ff3f6c",
  },

  navScroll: {
    maxWidth: 560,
  },

  navContent: {
    alignItems: "center",
  },

  navItem: {
    height: 76,
    paddingHorizontal: 13,
    justifyContent: "center",
    position: "relative",
  },

  activeNavItem: {
    borderBottomWidth: 3,
    borderBottomColor: "#ff3f6c",
  },

  navText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#282c3f",
  },

  activeNavText: {
    color: "#ff3f6c",
  },

  newText: {
    position: "absolute",
    top: 20,
    right: 1,
    color: "#ff3f6c",
    fontSize: 7,
    fontWeight: "900",
  },

  /* SEARCH */

  searchBox: {
    flex: 1,
    minWidth: 180,
    maxWidth: 480,
    height: 42,
    marginLeft: 12,
    backgroundColor: "#f5f5f6",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  searchInput: {
    flex: 1,
    marginLeft: 9,
    fontSize: 13,
    color: "#282c3f",
  },

  /* HEADER ICONS */

  headerAction: {
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  actionText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#282c3f",
    marginTop: 3,
  },

  /* OVERLAY */

  overlay: {
    position: "absolute",
    top: 76,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.35)",
    zIndex: 40,
  },

  /* MEGA MENU */

  megaMenu: {
    position: "absolute",
    top: 76,
    left: 5,
    right: 5,
    backgroundColor: "#ffffff",
    zIndex: 50,
    elevation: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  megaHeader: {
    height: 55,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },

  megaTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#ff3f6c",
  },

  closeButton: {
    padding: 7,
  },

  columnsContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },

  menuColumn: {
    width: 210,
    marginRight: 25,
  },

  columnTitle: {
    color: "#ff3f6c",
    fontSize: 14,
    fontWeight: "900",
    marginBottom: 12,
  },

  menuItem: {
    minHeight: 28,
    flexDirection: "row",
    alignItems: "center",
  },

  menuItemText: {
    flex: 1,
    color: "#282c3f",
    fontSize: 13,
  },

  itemArrow: {
    marginLeft: 5,
  },

  viewAllButton: {
    height: 48,
    backgroundColor: "#ff3f6c",
    alignItems: "center",
    justifyContent: "center",
  },

  viewAllText: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "900",
  },

  /* PAGE */

  pageContent: {
    paddingBottom: 50,
  },

  pageTitle: {
    textAlign: "center",
    marginTop: 35,
    fontSize: 30,
    fontWeight: "900",
    color: "#17265d",
  },

  pageSubtitle: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 14,
    color: "#696e79",
  },

  /* QUICK CATEGORIES */

  quickCategories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  },

  quickCategory: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#eeeeee",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#ffffff",
  },

  quickCategoryText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#282c3f",
  },

  /* FEATURED */

  featured: {
    marginTop: 20,
    paddingVertical: 35,
    alignItems: "center",
    backgroundColor: "#fff8eb",
  },

  featuredTitle: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#17265d",
    textAlign: "center",
  },

  featuredSubtitle: {
    marginTop: 7,
    color: "#696e79",
    fontSize: 14,
  },

  /* CARDS */

  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: 20,
  },

  categoryCard: {
    width: 190,
    marginBottom: 25,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#eeeeee",
    borderRadius: 8,
    overflow: "hidden",
  },

  cardImagePlaceholder: {
    width: "100%",
    height: 160,
    backgroundColor: "#f5f5f6",
    alignItems: "center",
    justifyContent: "center",
  },

  cardLetter: {
    fontSize: 60,
    fontWeight: "900",
    color: "#ff3f6c",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
    color: "#282c3f",
    marginTop: 12,
  },

  shopNow: {
    fontSize: 11,
    fontWeight: "800",
    color: "#ff3f6c",
    marginVertical: 10,
  },

  /* FOOTER */

  footer: {
    backgroundColor: "#fafbfc",
    marginTop: 30,
    padding: 35,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  footerColumn: {
    width: 190,
    marginBottom: 30,
  },

  footerHeading: {
    fontSize: 12,
    fontWeight: "900",
    color: "#282c3f",
    marginBottom: 15,
  },

  footerItem: {
    fontSize: 13,
    color: "#696e79",
    marginBottom: 9,
  },
});
