<template>
    <footer class="footer-view">
        <div class="container footer-logo-view">
            <img class="footer-logo" width="220" src="../../public/images/logo-bottom.png" alt="">
        </div>
        <div class="footer-menu-view">
            <div class="footer-column column-hidden has-text-centered">Copyright © 2019 IDP Education.</div>
            <div class="footer-column has-text-centered">All Rights Reserved.</div>
            <a href="https://www.idp.com/hongkong/disclaimer/" class="footer-link footer-column has-text-centered">Disclaimer</a>
            <a href="https://www.ieltsessentials.com/global/footerlinks/privacypolicy" class="footer-link footer-column has-text-centered">Privacy Policy</a>
            <a href="https://www.idp.com/hongkong/terms-of-use/" class="footer-link footer-column has-text-centered">Terms of Use</a>
            <a href="https://www.idp.com/hongkong/" class="footer-link footer-column column-hidden has-text-centered">Personal Information Collection Statement</a>
        </div>
        <div class="footer-tips">
            The website works best with following browsers: Internet Explorer 10 (or above) and all other major browsers currently available.
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .footer-view {
        position: relative;
        overflow: hidden;
        background: #2D3941;
        .footer-logo {
            display: block;
            margin: 0 auto;
        }
        .footer-logo-view {
            margin: 30px auto;
        }
        .footer-menu-view {
            padding-bottom: 30px;
            text-align: center;
            color: white;
            .column-hidden {
                &::before {
                    display: none;
                }
            }
            .footer-link {
                &:hover {
                    text-decoration: underline;
                }
            }
            .footer-column {
                position: relative;
                display: inline-block;
                transition: all 0.5s;
                padding: 0px 10px;
                font-size: 14px;
                white-space: nowrap;
                color: white;
                // &:hover {
                //     color: #e31837;
                // }
                &:before {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto 0;
                    height: 18px;
                    width: 1px;
                    content: '';
                    background-color: white;
                }
            }
        }
        .footer-tips {
            padding: 10px;
            display: flex;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            min-height: 60px;
            text-align: center;
            font-size: 14px;
            color: #A1A5A8 ;
            background: #222B30;
        }
    }
</style>
