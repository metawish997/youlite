import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const ReturnPolicy = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Return and Replacement</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="refresh-circle" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>Refund, Return & Replacement Policy</Text>
                            <Text style={styles.subtitle}>Return & Refund Policy</Text>
                        </View>
                    </View>

                    {/* Introduction */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            At Youlite Pvt. Ltd., we aim to provide high-quality solar lighting products and a smooth shopping experience. To ensure full customer clarity, the following policy explains when returns, refunds, and replacements are applicable.
                        </Text>
                    </View>

                    {/* New Content Sections */}
                    {/* Return Eligibility */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="calendar" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Return Eligibility & Time Window</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Customers can request a return within 7 days of product delivery. After 7 days, return requests will not be accepted. The product must be unused, in original packaging, and in resellable condition to qualify for return.
                        </Text>
                    </View>

                    {/* Conditions for Returns */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Conditions for Accepting Returns</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            A return will be accepted only if:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>The product received is wrong, defective, or not functioning as described.</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>All original accessories, manuals, and packaging are intact.</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>The product is not physically damaged by the customer.</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Products that fail due to mishandling, incorrect installation, or external damage will not be eligible for return.
                        </Text>
                    </View>

                    {/* Replacement Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="swap-horizontal" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Replacement Policy</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If the product has a technical fault, Youlite Pvt. Ltd. will provide a replacement after proper inspection.
                            Replacements will be issued only for:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Manufacturing defects</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Internal technical issues</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Non-functional units on arrival</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Replacements are not allowed if:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>The product is physically damaged after delivery</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Damage is caused due to water, breakage, burns, or misuse</Text>
                        </View>
                    </View>

                    {/* Refund Process */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="card" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Refund Process</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Once the returned product is inspected and approved, refunds will be processed within 7–10 working days.
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>For prepaid orders → Refund will be credited to the original payment method.</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>For COD orders → Refund will be given through bank transfer or UPI after verification.</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If the product does not pass inspection, the refund will not be approved, and the item may be sent back to the customer.
                        </Text>
                    </View>

                    {/* Return Shipping */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="car" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Return Shipping & Charges</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If the return is due to Youlite Pvt. Ltd.'s error (wrong/defective product), pickup and return shipping will be free.
                        </Text>
                        <Text style={styles.paragraph}>
                            If the return is due to customer preference or no longer needed, the customer may be required to bear the return shipping charges.
                        </Text>
                    </View>

                    {/* Damaged Products */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="warning" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Damaged or Defective Product on Delivery</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If a customer receives a damaged product, they must inform us within 24–48 hours of delivery with photos or videos as proof.
                        </Text>
                        <Text style={styles.paragraph}>
                            Our support team will verify the issue and guide the customer through the replacement or resolution process.
                        </Text>
                    </View>

                    {/* Non-Returnable Products */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="close-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Non-Returnable Products</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Due to the nature of solar products and electronic components, the following items are non-returnable once opened or used:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Batteries</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Solar panels</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Electronic components</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Accessories exposed to installation</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Products with physical damage caused after delivery</Text>
                        </View>
                    </View>

                    {/* Warranty Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="shield-checkmark" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Warranty Policy (6–12 Months)</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Most solar lighting products come with a 6–12 months warranty depending on the model.
                            The warranty covers:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Manufacturing defects</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Internal component failures</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Non-functional solar/battery components</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Warranty does not cover:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Physical damage</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Water damage (if product is not water-resistant)</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Damage caused by incorrect installation</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Burnt parts due to power or voltage fluctuations</Text>
                        </View>
                    </View>

                    {/* How to Request */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="help-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>How to Request a Return/Refund/Replacement</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Customers can contact our support team via:
                        </Text>
                    </View>

                    {/* Original Content Sections */}
                    {/* Return */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="return-up-back" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Return</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Product must be returned to us within 7 days from the date it was delivered to the customer. Product must be returned with all tags attached, in its original condition, along with all packing material, courier receipt, invoice & other papers.
                        </Text>
                    </View>

                    {/* Refund */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="cash" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Refund</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Once the Product is received by the company successfully, you will be notified. YOULITE ENERGY PRIVATE LIMITED will instantly initiate the refund to your source account or chosen method of refund.
                        </Text>
                    </View>

                    {/* LED Lights Policy */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="flash" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>LED Lights / Service Provider Policy</Text>
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
                            Customers can CANCEL the order only before the Order has been shipped/dispatched. After the Product/s have been shipped, the Customer cannot cancel the Orders. However, returns are possible for all orders/products.
                        </Text>
                    </View>

                    {/* Shipping & Delivery */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="car" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Shipping & Delivery Policies</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            YOULITE ENERGY PRIVATE LIMITED ships its products to almost all parts of India. Orders placed will be shipped within 24 hours. We ship on all days except Sundays and National Holidays.
                        </Text>
                        <Text style={styles.paragraph}>
                            For areas serviced by reputed couriers, the delivery time would be within 3 to 4 business days of shipping (business days exclude Sundays and other holidays). For other areas, the products may take 1-2 weeks, depending on location. At times, there might be unexpected delays due to logistics challenges beyond our control, for which YOULITE ENERGY PRIVATE LIMITED is not liable. We reserve the right to cancel your order if delivery takes longer than usual or if the shipment is physically untraceable, and refund the amount paid for cancelled product(s) to your source account.
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

export default ReturnPolicy;

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
    listItem: {
        flexDirection: 'row',
        marginBottom: 8,
        alignItems: 'flex-start',
    },
    bulletPoint: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.PRIMARY || '#2563EB',
        marginTop: 8,
        marginRight: 12,
    },
    listText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#4B5563',
        flex: 1,
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