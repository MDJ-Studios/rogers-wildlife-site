import Image from 'next/image';
import styles from './paypal.module.css';

export default function PayPal() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h4 className={styles.title}>Recurring Donation</h4>
                <div className={styles.imageWrapper}>
                    <Image
                        src={"/images/paypal_transparent.svg"}
                        width={400}
                        height={100}
                        alt="Paypal Button"
                        className={styles.image}
                    />
                </div>
                <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="blank"
                >
                    <input type="hidden" name="cmd" value="_xclick-subscriptions" />
                    <input type="hidden" name="business" value="SFVKHLKF3LHZG" />
                    <input type="hidden" name="lc" value="US" />
                    <input type="hidden" name="item_name" value="Recurring Donation to Rogers Wildlife" />
                    <input type="hidden" name="no_note" value="1" />
                    <input type="hidden" name="no_shipping" value="2" />
                    <input type="hidden" name="src" value="1" />
                    <input type="hidden" name="p3" value="1" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="bn" value="PP-SubscriptionsBF:btn_subscribeCC_LG.gif:NonHosted" />

                    <table width="100%" className={styles.table}>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="hidden" name="on0" value="Donation Frequency" />
                                    Donation Frequency
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="t3" className={styles.select}>
                                        <option value="M">Monthly</option>
                                        <option value="Y">Yearly</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>How many times would you like this to recur?</td>
                            </tr>
                            <tr>
                                <td>
                                    <select name="srt" className={styles.select}>
                                        <option value="0">Never Ending</option>
                                        <option value="6">6 times</option>
                                        <option value="12">12 times</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Enter Your Donation Amount</td>
                            </tr>
                            <tr>
                                <td className={styles.amountInput}>
                                    $
                                    <input
                                        type="text"
                                        name="a3"
                                        maxLength="60"
                                        className={styles.input}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input
                        type="image"
                        src="https://www.paypal.com/en_US/i/btn/btn_donateCC_LG.gif"
                        name="submit"
                        alt="PayPal - The safer, easier way to pay online!"
                        className={styles.donateButton}
                    />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
            <div className={styles.card}>
                <h4 className={styles.title}>One-Time Donation</h4>
                <div className={styles.imageWrapper}>
                    <Image
                        src={"/images/paypal_transparent.svg"}
                        width={400}
                        height={100}
                        alt="Paypal Button"
                        className={styles.image}
                    />
                </div>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="X4A58SK52T56S" />
                    <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                        name="submit"
                        alt="Paypal donation button"
                        className={styles.donateButton}
                    />
                    <Image alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        </div>
    )
}
