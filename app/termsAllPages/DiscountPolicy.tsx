import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Colors from '@/utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const DiscountPolicy = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} backgroundColor={Colors.WHITE} />
            <SafeAreaView style={styles.safeArea}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Discount Policy</Text>
                    <View style={styles.headerPlaceholder} />
                </View>

                {/* Content */}
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Title Section */}
                    <View style={styles.titleContainer}>
                        <Ionicons name="pricetag" size={32} color={Colors.PRIMARY} />
                        <View>
                            <Text style={styles.title}>10% Discount Policy</Text>
                            <Text style={styles.subtitle}>Terms & Conditions for Discount Offers</Text>
                        </View>
                    </View>

                    {/* Introduction */}
                    <View style={styles.discountBadge}>
                        <Ionicons name="pricetag-outline" size={20} color={Colors.WHITE} />
                        <Text style={styles.discountText}>10% OFF</Text>
                    </View>

                    {/* Eligibility */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="person" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Eligibility</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            This 10% discount offer is available to all customers unless specifically mentioned otherwise. The discount is applicable only on products that clearly display "10% OFF" or "Discount Available" on their product page.
                        </Text>
                    </View>

                    {/* Discount Applicability */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="checkmark-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Discount Applicability</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The discount applies strictly to the product price. It does not apply to:
                        </Text>
                        <View style={styles.listItem}>
                            <Ionicons name="close-circle" size={16} color="#EF4444" />
                            <Text style={styles.listText}>Delivery charges</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Ionicons name="close-circle" size={16} color="#EF4444" />
                            <Text style={styles.listText}>Taxes (GST)</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Ionicons name="close-circle" size={16} color="#EF4444" />
                            <Text style={styles.listText}>COD charges</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Ionicons name="close-circle" size={16} color="#EF4444" />
                            <Text style={styles.listText}>Any additional service fees</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            Certain products may not be eligible for the discount, and such exceptions will be shown on the respective product pages.
                        </Text>
                    </View>

                    {/* Offer Validity */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="time" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Offer Validity</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The 10% discount is a limited-time promotional offer. The company reserves the right to change, suspend, or terminate the offer at any time without prior notice.
                        </Text>
                    </View>

                    {/* Coupon or Automatic Discount */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="ticket" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Coupon or Automatic Discount</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The discount may be applied automatically at checkout or may require a coupon code if issued by the company.
                        </Text>
                        <View style={styles.noteCard}>
                            <Ionicons name="information-circle" size={18} color={Colors.PRIMARY} />
                            <Text style={styles.noteCardText}>
                                Only one discount or coupon can be applied per order, and multiple offers cannot be combined.
                            </Text>
                        </View>
                    </View>

                    {/* Returns and Refunds */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="refresh-circle" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Returns and Refunds on Discounted Products</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            All discounted products follow the company's standard return and refund policy. If a refund is issued, the refund amount will be calculated based on the discounted price paid by the customer.
                        </Text>
                        <View style={styles.exampleCard}>
                            <Text style={styles.exampleTitle}>Example:</Text>
                            <View style={styles.exampleRow}>
                                <Text style={styles.exampleLabel}>Product price</Text>
                                <Text style={styles.exampleValue}>₹1000</Text>
                            </View>
                            <View style={styles.exampleRow}>
                                <Text style={styles.exampleLabel}>10% discount</Text>
                                <Text style={styles.exampleValue}>- ₹100</Text>
                            </View>
                            <View style={[styles.exampleRow, styles.exampleTotal]}>
                                <Text style={styles.exampleLabel}>Final price paid</Text>
                                <Text style={styles.exampleValue}>₹900</Text>
                            </View>
                            <View style={[styles.exampleRow, styles.exampleRefund]}>
                                <Text style={styles.exampleLabel}>Refund amount</Text>
                                <Text style={styles.exampleValue}>₹900</Text>
                            </View>
                        </View>
                    </View>

                    {/* Fraud and Misuse Prevention */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="shield-checkmark" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Fraud and Misuse Prevention</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The company may cancel or deny the discount if any misuse or suspicious activity is detected, such as:
                        </Text>
                        <View style={styles.listItem}>
                            <Ionicons name="warning" size={16} color="#F59E0B" />
                            <Text style={styles.listText}>Fake accounts</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Ionicons name="warning" size={16} color="#F59E0B" />
                            <Text style={styles.listText}>Multiple unauthorized use of discount codes</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The company also reserves the right to cancel any order that violates policy guidelines.
                        </Text>
                    </View>

                    {/* Rights to Modify */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="settings" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Rights to Modify</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            The company may modify the discount percentage, update the terms, or discontinue the offer at any time without prior notice.
                        </Text>
                    </View>

                    {/* Final Decision */}
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <Ionicons name="hammer" size={20} color={Colors.PRIMARY} />
                            <Text style={styles.heading}>Final Decision</Text>
                        </View>
                        <Text style={styles.paragraph}>
                            In case of any dispute related to the discount, the company's decision will be final and binding.
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

export default DiscountPolicy;

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
        marginBottom: 16,
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
    discountBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#10B981',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginBottom: 24,
        gap: 6,
    },
    discountText: {
        color: Colors.WHITE || '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
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
        alignItems: 'center',
        marginBottom: 8,
        gap: 8,
    },
    listText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#4B5563',
        flex: 1,
    },
    noteCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FEF3C7',
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#F59E0B',
        gap: 8,
        marginTop: 8,
    },
    noteCardText: {
        fontSize: 14,
        color: '#92400E',
        lineHeight: 20,
        flex: 1,
    },
    exampleCard: {
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        marginTop: 8,
    },
    exampleTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 12,
    },
    exampleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    exampleLabel: {
        fontSize: 14,
        color: '#6B7280',
    },
    exampleValue: {
        fontSize: 14,
        color: '#374151',
        fontWeight: '500',
    },
    exampleTotal: {
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        paddingTop: 8,
        marginTop: 4,
    },
    exampleRefund: {
        backgroundColor: '#D1FAE5',
        marginHorizontal: -16,
        marginBottom: -16,
        marginTop: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
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

