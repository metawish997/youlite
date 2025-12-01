import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Payment = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Payment Policy</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="card" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>Payment Policy</Text>
                            <Text style={styles.subtitle}>Secure & Reliable Payment Experience</Text>
                        </View>
                    </View>

                    {/* Introduction */}
                    <View style={styles.card}>
                        <Text style={styles.paragraph}>
                            At Youlite Pvt. Ltd., we ensure a secure and reliable payment experience for all customers. This Payment Policy explains how payments are processed, protected, and handled in case of failures or refunds.
                        </Text>
                    </View>

                    {/* Secure Online Payments */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="shield-checkmark" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Secure Online Payments</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            All online payments on our app are processed through Razorpay, a trusted and industry-leading payment gateway. Razorpay is PCI-DSS compliant, which means your payment information is protected with the highest security standards.
                        </Text>
                    </View>

                    {/* Encrypted Transactions */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="lock-closed" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Encrypted Transactions</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Every transaction made through our platform is securely encrypted. This ensures that your personal and financial information remains completely confidential. We follow strict safety protocols to keep your data protected during every stage of the payment process.
                        </Text>
                    </View>

                    {/* No Storage of Card Information */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="eye-off" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>No Storage of Card Information</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Youlite Pvt. Ltd. does not store any card details or sensitive banking information on its servers. As per legal guidelines, saving card numbers, CVV, or expiry details is strictly prohibited. All card data is handled directly and securely by Razorpay.
                        </Text>
                    </View>

                    {/* Payment Methods Accepted */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="wallet" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Payment Methods Accepted</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            We support multiple payment options, including:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Debit/Credit Cards</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>UPI</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Net Banking</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Wallets</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Razorpay Pay Later (if available)</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Payment modes may vary based on availability and user location.
                        </Text>
                    </View>

                    {/* Refund Processing */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="refresh-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Refund Processing</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If a refund is approved for an order, it will be processed back to the same payment method used during purchase.
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>Refunds typically take 7–10 working days to reflect.</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>In case of delays, customers may follow up with their respective banks, as processing time can vary.</Text>
                        </View>
                    </View>

                    {/* Payment Failures */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="warning" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Payment Failures</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            If a payment fails but the amount is deducted from your bank:
                        </Text>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>The amount is usually automatically reversed within 5–7 working days by your bank or Razorpay.</Text>
                        </View>
                        <View style={styles.listItem}>
                            <View style={styles.bulletPoint} />
                            <Text style={styles.listText}>If the payment status remains unclear, customers can contact our support team for verification.</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            We recommend not making multiple payment attempts unless clearly instructed.
                        </Text>
                    </View>

                    {/* Support for Payment Issues */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="help-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Support for Payment Issues</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            For help related to failed payments, refunds, or transaction status, you can reach our support team at:
                        </Text>

                        <View style={styles.contactCard}>
                            <View style={styles.contactItem}>
                                <Ionicons name="mail-outline" size={18} color={Colors.PRIMARY} />
                                <Text style={styles.contactText}>Email: support@youlitestore.in</Text>
                            </View>
                            <View style={styles.contactItem}>
                                <Ionicons name="call-outline" size={18} color={Colors.PRIMARY} />
                                <Text style={styles.contactText}>Phone: +91 8269233078</Text>
                            </View>
                        </View>

                        <Text style={styles.paragraph}>
                            Our team will assist you promptly in resolving payment concerns.
                        </Text>
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

export default Payment;

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
        marginVertical: 8,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    contactText: {
        fontSize: 14,
        color: '#4B5563',
        marginLeft: 12,
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

