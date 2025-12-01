import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Shipping = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Shipping & Delivery</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="cube" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>Shipping & Delivery Policy</Text>
                            <Text style={styles.subtitle}>Return, Refund, and Shipping Policy</Text>
                        </View>
                    </View>

                    {/* New Shipping Policy Content */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            At Youlite Pvt. Ltd., we aim to ensure that your solar products reach you safely, quickly, and in perfect condition. This Shipping & Delivery Policy explains our dispatch timelines, coverage, charges, and support process.
                        </Text>
                    </View>

                    {/* Delivery Timeline */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="time" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Delivery Timeline</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Orders are generally delivered within 3–7 working days depending on the customer's location. Deliveries to metro cities may arrive faster, while remote regions may require a little extra time. All timelines are estimates and may vary.
                        </Text>
                    </View>

                    {/* Delivery Coverage */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="map" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Delivery Coverage (PAN India)</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            We provide PAN India delivery and ship to most major cities, towns, and rural areas across the country. In rare cases, certain pin codes may not be serviceable by our courier partners. If this occurs, our support team will contact you immediately to provide an alternative solution.
                        </Text>
                    </View>

                    {/* Shipping Charges */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="pricetag" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Shipping Charges</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Shipping charges are calculated based on the product weight, delivery location, and courier availability. Any applicable charges will be clearly displayed at checkout before payment is completed. There are no hidden fees.
                        </Text>
                    </View>

                    {/* Order Processing Time */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="settings" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Order Processing Time</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            All orders are processed and packed within 24–48 hours after payment confirmation. Orders placed on Sundays or public holidays are processed on the next working day to ensure accurate and timely dispatch.
                        </Text>
                    </View>

                    {/* Courier Partners */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="business" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Courier Partners</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            We ship through reliable and reputed courier service providers to ensure your order reaches you safely. Our commonly used partners include Delhivery, Blue Dart, DTDC, and India Post. The courier partner may vary depending on the delivery area and service availability.
                        </Text>
                    </View>

                    {/* Tracking Information */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="location" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Tracking Information</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Once your order is dispatched, you will receive a tracking ID via SMS or email. This allows you to monitor your shipment in real time until it is delivered. Tracking information typically reflects updates within 24 hours of dispatch.
                        </Text>
                    </View>

                    {/* Delivery Delays */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="warning" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Delivery Delays</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            In some situations, delivery may be delayed due to factors beyond our control, such as bad weather, festivals, logistics issues, or incorrect delivery details provided by the customer. If a delay occurs, we will assist you by providing updated tracking information and support.
                        </Text>
                    </View>

                    {/* Failed Delivery Attempts */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="close-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Failed Delivery Attempts</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If the courier is unable to deliver the package due to the customer being unavailable or an incorrect address, the courier may attempt delivery 2–3 times. If the delivery still fails, the order may be returned to our warehouse. In such cases, reshipping may require additional charges depending on the situation.
                        </Text>
                    </View>

                    {/* Original Content Sections */}
                    {/* Return Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="return-up-back" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Return</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The product must be returned to us within 7 days from the date it was delivered to the customer. Product must be returned with all tags attached, in its original condition, along with all packing material, courier receipt, invoice & other papers.
                        </Text>
                    </View>

                    {/* Refund Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="card" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Refund</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Once the Product is received by the company successfully, YOULITE ENERGY PRIVATE LIMITED will instantly initiate the refund to your source account or chosen method of refund.
                        </Text>
                    </View>

                    {/* LED Strip Lights Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="flash" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>LED Strip Lights / Service Provider Policy</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Due to the nature of services provided, "NO REFUND" and "NO CANCELLATION" will be entertained once the payment has been made.
                        </Text>
                    </View>

                    {/* Cancellation Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="close" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Cancellation Policy</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Please note that an order can only be canceled within 24 hours of placing the order. Once the order is processed after 24 hours, no cancellation request will be entertained. However, returns are possible for all orders/products.
                        </Text>
                        <Text style={styles.paragraph}>
                            Customers can CANCEL the order only before the Order has been shipped/dispatched. After the Product/s have been shipped, the Customer CANNOT cancel the Orders. However, returns are possible for all orders/products.
                        </Text>
                    </View>

                    {/* Original Shipping & Delivery Policies */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="car" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Shipping & Delivery Policies</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            YOULITE ENERGY PRIVATE LIMITED ships its products to almost all parts of India. Orders placed will be shipped within 24 hours. We ship on all days except Sundays and National Holidays.
                        </Text>
                        <Text style={styles.paragraph}>
                            For all areas serviced by reputed couriers, the delivery time would be within 3 to 4 business days of shipping (business days exclude Sundays and other holidays). For other areas, the products may take 1-2 weeks, depending on location. At times, there might be unexpected delays in delivery due to unavoidable logistics challenges beyond our control, for which YOULITE ENERGY PRIVATE LIMITED is not liable. We request users to cooperate as we continuously try to avoid such instances. YOULITE ENERGY PRIVATE LIMITED reserves the right to cancel your order at its sole discretion if delivery takes longer than usual or the shipment is untraceable, and refund the amount paid to your source account.
                        </Text>
                    </View>

                    {/* Customer Support for Delivery Issues */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="help-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Customer Support for Delivery Issues</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            For any delivery-related queries, tracking help, or support, customers can reach us at:
                        </Text>
                    </View>

                    {/* Contact Information */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="mail" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Contact Us</Text>
                        </View>

                        <View style={styles.contactCard}>
                            <View style={styles.contactItem}>
                                <Ionicons name="mail-outline" size={18} color={Colors.PRIMARY} />
                                <Text style={styles.contactText}>Email: support@youlitestore.in</Text>
                            </View>
                            <View style={styles.contactItem}>
                                <Ionicons name="call-outline" size={18} color={Colors.PRIMARY} />
                                <Text style={styles.contactText}>Phone: +91 8269233078</Text>
                            </View>
                            <View style={styles.contactItem}>
                                <Ionicons name="business-outline" size={18} color={Colors.PRIMARY} />
                                <Text style={styles.contactText}>
                                    YOULITE ENERGY PRIVATE LIMITED{'\n'}
                                    Plot No. 17, First Floor, DLF Industrial Area,{'\n'}
                                    Moti Nagar, New Delhi – 110015, India
                                </Text>
                            </View>
                            <View style={styles.contactItem}>
                                <Ionicons name="call-outline" size={18} color={Colors.PRIMARY} />
                                <View>
                                    <Text style={styles.contactText}>Additional Phone:</Text>
                                    <Text style={[styles.contactText, styles.link]} onPress={() => Linking.openURL('tel:+911143587138')}>+91 1143587138</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Last updated: {new Date().toLocaleDateString()}
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Shipping;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE || '#FFFFFF',
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 16,
        backgroundColor: Colors.WHITE || '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    backButton: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#F8F9FA',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.PRIMARY || '#2563EB',
    },
    headerPlaceholder: {
        width: 40,
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 12,
        color: Colors.PRIMARY || '#2563EB',
        flex: 1,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginLeft: 12,
        marginTop: 4,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    section: {
        marginBottom: 24,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    heading: {
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 8,
        color: Colors.PRIMARY || '#2563EB',
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 22,
        color: '#4B5563',
        marginBottom: 12,
    },
    contactCard: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    contactText: {
        fontSize: 14,
        color: '#4B5563',
        marginLeft: 12,
        flex: 1,
        lineHeight: 20,
    },
    link: {
        color: Colors.PRIMARY,
        textDecorationLine: 'underline',
    },
    footer: {
        marginTop: 24,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#9CA3AF',
        fontStyle: 'italic',
    },
});


