const menuData = [
    {
        id: "b1",
        name: "Kem bơ hạt dẻ Box",
        description: "",
        price: "110,000đ",
        category: "box-cake",
        image: "https://static.wixstatic.com/media/6774d8_6f579423eb41464dbb77e4ea0ddfe5bb~mv2.jpeg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpeg",
        alt: "Kem bơ hạt dẻ box"
    },
    {
        id: "b2",
        name: "Trà đào Box",
        description: "",
        price: "110,000đ",
        category: "box-cake",
        image: "https://static.wixstatic.com/media/6774d8_0162df2d10e546a18211137a40f87436~mv2.jpeg/v1/fill/w_152,h_152,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpeg",
        alt: "Trà đào Box"
    },
    {
        id: "b3",
        name: "Tiramisu Box",
        description: "",
        price: "110,000đ",
        category: "box-cake",
        image: "https://static.wixstatic.com/media/6774d8_9e5c00aa84ab4fcb9051dc68a87eb320~mv2.jpeg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpeg",
        alt: "Tiramisu Box"
    },
    {
        id: "b4",
        name: "Crunchie Choco",
        description: "",
        price: "125,000đ",
        category: "box-cake",
        image: "https://static.wixstatic.com/media/6774d8_41de45d33e3c40fc86380210f3635711~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Crunchie Choco"
    },
    {
        id: "b5",
        name: "Berry Box",
        description: "",
        price: "110,000đ",
        category: "box-cake",
        image: "https://static.wixstatic.com/media/6774d8_0babf2c540604b3685ea4a01e9efe510~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Berry Box"
    },
    {
        id: "m1",
        name: "Bánh Caramel Mặn",
        description: "",
        price: "65,000đ",
        category: "mini-cake",
        image: "data/Mini cake/caramel mặn.jpg",
        alt: "Mini Cake Caramel Mặn"
    },
    {
        id: "m2",
        name: "Bánh Cà Phê",
        description: "",
        price: "60,000đ",
        category: "mini-cake",
        image: "data/Mini cake/cà phê.jpg",
        alt: "Mini Cake Cà Phê"
    },
    {
        id: "m3",
        name: "Bánh Dâu Kem Tươi",
        description: "",
        price: "60,000đ",
        category: "mini-cake",
        image: "data/Mini cake/dâu kem tươi.jpg",
        alt: "Mini Cake Dâu Kem Tươi"
    },
    {
        id: "m4",
        name: "Bánh Kem Cam",
        description: "",
        price: "65,000đ",
        category: "mini-cake",
        image: "data/Mini cake/kem cam.jpg",
        alt: "Mini Cake Kem Cam"
    },
    {
        id: "m5",
        name: "Bánh Kem Chanh",
        description: "",
        price: "60,000đ",
        category: "mini-cake",
        image: "data/Mini cake/kem chanh.jpg",
        alt: "Mini Cake Kem Chanh"
    },
    {
        id: "m6",
        name: "Bánh Matcha Xoài",
        description: "",
        price: "65,000đ",
        category: "mini-cake",
        image: "data/Mini cake/matcha xoài.jpg",
        alt: "Mini Cake Matcha Xoài"
    },
    {
        id: "m7",
        name: "Bánh Phô Mai Chanh Vàng",
        description: "",
        price: "65,000đ",
        category: "mini-cake",
        image: "data/Mini cake/phô mai chanh vàng.jpg",
        alt: "Mini Cake Phô Mai Chanh Vàng"
    },
    {
        id: "m8",
        name: "Bánh Phô Mai Dâu",
        description: "",
        price: "65,000đ",
        category: "mini-cake",
        image: "data/Mini cake/phô mai dâu.jpg",
        alt: "Mini Cake Phô Mai Dâu"
    },
    {
        id: "m9",
        name: "Bánh Socola",
        description: "",
        price: "60,000đ",
        category: "mini-cake",
        image: "data/Mini cake/socola.jpg",
        alt: "Mini Cake Socola"
    },
    {
        id: "m10",
        name: "Bánh Sữa Chua Đào",
        description: "",
        price: "60,000đ",
        category: "mini-cake",
        image: "data/Mini cake/sữa chua đào.jpg",
        alt: "Mini Cake Sữa Chua Đào"
    },
    {
        id: "m11",
        name: "Bánh Việt Quất",
        description: "",
        price: "65,000đ",
        category: "mini-cake",
        image: "data/Mini cake/việt quất.jpg",
        alt: "Mini Cake Việt Quất"
    },
    {
        id: "m12",
        name: "Bánh Xoài Chanh Leo",
        description: "",
        price: "65,000đ",
        category: "mini-cake",
        image: "data/Mini cake/xoài chanh leo.jpg",
        alt: "Mini Cake Xoài Chanh Leo"
    },
    {
        id: "c1",
        name: "Hoa Vàng",
        description: "Phần cốt bánh vani kết hợp cùng xoài tươi và thạch xoài được bao phủ lớp kem tươi ngọt dịu nhẹ, sự lựa chọn phù hợp với các lứa tuổi",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_4e9617ff22ea4d839e136825b1bbba48~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Sinh Nhật Hoa Vàng"
    },
    {
        id: "c2",
        name: "Cỏ Xanh",
        description: "Kem sữa chua ngậy béo kết hợp cùng cốt bánh vani và thật nhiều nho tươi mang lại hương vị chua mát giòn thơm.Kem sữa chua ngậy béo kết hợp cùng cốt bánh vani và thật nhiều nho tươi mang lại hương vị chua mát giòn thơm.",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_865726411d2d48fe82c12db125891f2a~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Sinh Nhật Cỏ Xanh"
    },
    {
        id: "c3",
        name: "Bánh Trà Đào",
        description: "Hương trà dìu dịu trong cốt bánh kết hợp cùng kem đào thơm ngậy bao lấy thạch đào chua chua ngọt ngọt - bánh trà đào thơm ngát và ngọt thanh.",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_8b3de581b9644d2db7b197eebb9b5a9e~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Trà Đào"
    },
    {
        id: "c4",
        name: "Bánh Sữa Chua Mãng Cầu",
        description: "Vị chua thanh đặc trưng từ kem sữa chua signature của tiệm, quyện cùng mãng cầu tươi, thạch sữa chua và cốt bánh trà thơm dịu. Hương vị chua thanh, thơm mát.",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_6b1b57371cda4d7db40d3e030990a266~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Sữa Chua Mãng Cầu"
    },
    {
        id: "c5",
        name: "Bánh Xoài Chanh Leo",
        description: "Vị kem chanh leo chua mát, bao lấy lớp thạch xoài và xoài tươi trên nền bánh vani nhẹ nhàng - một chiếc bánh chua mát hợp với ngày hạ nắng",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_c5ac62d64cc14e29a71846bf5758565a~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Xoài Chanh Leo"
    },
    {
        id: "c6",
        name: "Bánh Lemon Custard Cheese",
        description: "Cốt bánh vani, nhân kem phô mai và custard chanh vàng. Kem tươi bao ngoài. Bánh sẽ ngậy và chua nhiều.",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_4ce3ea6a1aad495cb10bef59b2c8d484~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Lemon Custard Cheese"
    },
    {
        id: "c7",
        name: "Bánh Xoài Kem Tươi",
        description: "Cốt bánh vani mềm ẩm kết hợp cùng kem tươi ít ngọt (whipping cream), xen giữa là những miếng xoài tươi. Vị bánh ngọt nhẹ.",
        price: "320,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_72ee7e798ede40008369fa8076b5b714~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Xoài Kem Tươi"
    },
    {
        id: "c8",
        name: "Bánh Coco Coffee Dream",
        description: "Cốt bánh sô cô la, xen giữa các lớp bánh là xốt dừa, thạch cà phê mát lạnh và kem tươi vị cà phê (espresso). Vị bánh thiên ngọt, ngậy và thơm, tựa như một ly cà phê cốt dừa tươi mát.",
        price: "390,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_be16307ab11a4a42bd6fc20d091d8232~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Coco Coffee Dream"
    },
    {
        id: "c9",
        name: "Bánh Orange Muse",
        description: "Cốt bánh vani, nhân cam vàng tươi mọng nước, kem tươi kết hợp cùng mứt cam. Vị bánh chua nhẹ, thanh và thơm vị cam.",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_082b240a4baf407c98cd470d6f97ab2b~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Orange Muse"
    },
    {
        id: "c10",
        name: "Bánh Lime Earlgrey",
        description: "Cốt bánh trà bá tước, kem tươi vị chanh với vỏ chanh lẫn trong kem tạo sự tươi mát. Vị bánh ít ngọt, chua nhẹ và thanh dịu.",
        price: "320,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_2ce51743d73043f696b2d811b17e386d~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Lime Earlgrey"
    },
    {
        id: "c11",
        name: "Bánh Salted Caramel",
        description: "Cốt bánh sô cô la, nhân xốt caramel mặn (home-made salted caramel) được nấu thủ công và bánh waffle, kem tươi ít ngọt bao ngoài, trang trí sáng tạo bởi những miếng đường cháy. Vị bánh thiên ngọt và ngậy.",
        price: "370,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_036d54dddae541d4afb403b05fb36226~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Salted Caramel"
    },
    {
        id: "c12",
        name: "Bánh Xoài Kem Cháy",
        description: "Cốt bánh vani mềm ẩm kết hợp cùng kem tươi ít ngọt (whipping cream), xen giữa là những miếng xoài tươi, phủ bên trên là một lớp kem chảy ít ngọt. Vị bánh ngọt nhẹ.",
        price: "340,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_903420a60aad4bf3b136433a3d7de697~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Xoài Kem Cháy"
    },
    {
        id: "c13",
        name: "Bánh Choco Oreo/Matcha Oreo",
        description: "Cốt bánh sô cô la hoặc matcha. Kem tươi ít ngọt kết hợp cùng vụn bánh Oreo. Phủ bên trên là một lớp sô cô la tan chảy. Vị bánh thiên ngọt, ngậy và thơm.",
        price: "320,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_1ae24a0524cc4bcba0aaea8f21104d44~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Choco Oreo/Matcha Oreo"
    },
    {
        id: "c14",
        name: "Bánh Việt Quất",
        description: "Cốt bánh vani, kem tươi hòa quyện cùng mứt việt quất và thạch sữa chua. Vị bánh chua, thơm",
        price: "360,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_7c1ee8376fd24aea8c46551486c16e96~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Việt Quất"
    },
    {
        id: "c15",
        name: "Bánh Mango Cheese",
        description: "Cốt bánh vani hoặc matcha, nhân mứt xoài kết hợp cùng kem phô mai mang đến vị bánh chua ngọt hài hòa, bao ngoài. Vị bánh thiên ngọt và ngậy.",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_fd41eef789f947eab2c51a6661b37b76~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Mango Cheese"
    },
    {
        id: "c16",
        name: "Bánh Green Grape Yogurt",
        description: "Cốt bánh vani, nhân nho xanh tươi và giòn kết hợp cùng kem tươi vị sữa chua. Vị bánh chua, thanh và ít ngọt.",
        price: "370,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_8bd80ea5aba64d74b99911fa47d6d9ba~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Green Grape Yogurt"
    },
    {
        id: "c17",
        name: "Bánh Hoa Quả",
        description: "Cốt bánh vani, nhân hoa quả ( đào, xoài, nho, dâu, cam - theo mùa) kết hợp cùng kem tươi hoặc kem vị sữa chua. Vị bánh chua mát, đặc trưng của hoa quả tươi.",
        price: "380,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_f0106110724b4bf7978008620bffd245~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Hoa Quả"
    },
    {
        id: "c18",
        name: "Bánh Dâu Kem Tươi/Kem Sữa Chua (theo mùa)",
        description: "Cốt bánh vani, nhân dâu tây tươi và kem tươi hoặc kem tươi vị sữa chua. Vị bánh thanh và chua nhẹ.",
        price: "350,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_a11bdb0883584125b248e030dc3d27d4~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Dâu Kem Tươi/Kem Sữa Chua (theo mùa)"
    },
    {
        id: "c19",
        name: "Banachoco",
        description: "Cốt sô cô la, kem sô cô la xen giữa là các lớp chuối tươi. Trang trí lớp xốt sô cô la tan chảy và chuối được khò đường cháy",
        price: "360,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_fbdeaf10d19d467e8f24d3b1375a8570~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Banachoco"
    },
    {
        id: "c20",
        name: "Cheeseberry cake",
        description: "Một sự kết hợp ngọt ngào giữa mứt dâu nhà làm cùng cremcheese và kem tươi. Chiếc bánh cheeseberry mang đầy đủ các hương vị ngọt, chua nhẹ, ngậy và thơm đủ để khiến bạn siêu lòng",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_e90b391419db48f78ad5fbd15fc5b1c2~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Cheeseberry cake"
    },
    {
        id: "c21",
        name: "Mango Cheese Cake",
        description: "Cốt bánh matcha, nhân kem phô mai và mứt xoài, kem tươi bao ngoài",
        price: "400,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_c0206a04c3c44b4bbfc38c5cbb63eac0~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Mango Cheese Cake"
    },
    {
        id: "c22",
        name: "Bánh Choco Extra",
        description: "Cốt bánh sô cô la, kem tươi sô cô la (whipping cream), phủ bên trên là lớp sô cô la tan chảy. Vị bánh thiên ngọt, hơi đắng nhẹ của sô cô la, đủ ngọt ngào nhưng cũng không ngấy. Ngoài ra bề mặt bánh được phủ lớp ganache choco.",
        price: "330,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_8bbea73e9ca3479ab86336c0ea2989ce~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Choco Extra"
    },
    {
        id: "c23",
        name: "Bánh Choco",
        description: "Cốt bánh sô cô la, kem tươi sô cô la (whipping cream), phủ bên trên là lớp sô cô la tan chảy. Vị bánh thiên ngọt, hơi đắng nhẹ của sô cô la, đủ ngọt ngào nhưng cũng không ngấy. Ngoài ra bề mặt bánh được phủ lớp ganache choco.",
        price: "330,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_9944251ac28d4e5c92c4ce345338e4e0~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Choco"
    },
    {
        id: "c24",
        name: "Bánh Passion Coconut",
        description: "Cốt bánh vani, nhân xốt dừa thơm ngậy, kem tươi vị chanh leo bao ngoài, phủ trên bề mặt là sốt chanh leo chua ngọt. Vị bánh thơm, chua nhẹ và ngậy.",
        price: "390,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_17cfa3d34c3e42679eb95a2cd1c19e7f~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Passion Coconut"
    },
    {
        id: "c25",
        name: "Bánh Peach Yogurt",
        description: "Cốt bánh vani, nhân đào ngâm xắt hạt lựu và kem tươi vị sữa chua. Vị bánh chua nhẹ và thanh mát.",
        price: "320,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_8b8a24401af44e20b7ad36a243ec2d57~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Peach Yogurt"
    },
    {
        id: "c26",
        name: "Bánh Peach Yogurt Mẫu 2",
        description: "Cốt bánh vani, nhân đào ngâm xắt hạt lựu và kem tươi vị sữa chua. Vị bánh chua nhẹ và thanh mát.",
        price: "340,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_a5f65da128a94dd1871ad5d91f5f70e4~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Peach Yogurt Mẫu 2"
    },
    {
        id: "c27",
        name: "Bánh Cà Phê",
        description: "Cốt bánh choco và kem tươi vị cà phê ngậy ngọt. Trang trí thêm lớp sốt caramel thơm béo. Bánh cà phê sẽ phù hợp với các tín đồ hảo ngọt và thơm của cà phê",
        price: "320,000đ",
        category: "birthday-cake",
        image: "https://static.wixstatic.com/media/6774d8_532cd263e3b24d4baf5f052654496c76~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Cà Phê"
    },
    {
        id: "mig1",
        name: "Chocolate - Valentine's Day",
        description: "Bánh Mignonne 12cm vị chocolate đậm đà, trang trí theo phong cách Valentine ngọt ngào.",
        price: "300,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_67629e3d47354431ad7ede98539d9850~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Chocolate Valentine's Day Mignonne"
    },
    {
        id: "mig2",
        name: "Strawberry - Valentine's Day",
        description: "Bánh Mignonne 12cm vị dâu tây tươi mát, trang trí theo phong cách Valentine lãng mạn.",
        price: "300,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_cc31308915fa42a5810a0dcdc025b7ae~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Strawberry Valentine's Day Mignonne"
    },
    {
        id: "mig3",
        name: "Salted Caramel - Valentine's Day",
        description: "Bánh Mignonne 12cm vị caramel mặn đặc trưng, phong cách Valentine tinh tế.",
        price: "300,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_88b6373400d94f93ac991b0ada1b45a0~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Salted Caramel Valentine's Day Mignonne"
    },
    {
        id: "mig4",
        name: "Passion Coconut",
        description: "Bánh Mignonne 12cm kết hợp chanh dây nhiệt đới và dừa béo ngậy, hương vị độc đáo.",
        price: "260,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_f6573703df654870a2c14bf6145b3173~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Passion Coconut Mignonne"
    },
    {
        id: "mig5",
        name: "Cheeseberry",
        description: "Bánh Mignonne 12cm kết hợp kem cheese mặn nhẹ và dâu tây tươi, vị chua ngọt hài hòa.",
        price: "290,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_8a772a9ba10548aebb29950b50d097f1~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Cheeseberry Mignonne"
    },
    {
        id: "mig6",
        name: "Blueberry",
        description: "Bánh Mignonne 12cm phủ việt quất tươi, kem nhẹ nhàng với hương việt quất thanh mát.",
        price: "260,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_65eb23f82a0b4d7f8579ed5476a64b6e~mv2.jpg/v1/fill/w_600,h_338,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Blueberry Mignonne"
    },
    {
        id: "mig7",
        name: "Choco Oreo",
        description: "Bánh Mignonne 12cm chocolate đậm đà kết hợp vụn bánh Oreo giòn rụm đặc trưng.",
        price: "230,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_fbbb0a0617f44a3d9c42e3c97df4021e~mv2.jpg/v1/fill/w_600,h_338,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Choco Oreo Mignonne"
    },
    {
        id: "mig8",
        name: "Coffee Caramel",
        description: "Bánh Mignonne 12cm vị cà phê đắng nhẹ hòa quyện caramel ngọt ngào, dành cho người yêu cà phê.",
        price: "230,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_ee94a1215b264bbfb582a5ffa4d3bf4f~mv2.jpg/v1/fill/w_600,h_338,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Coffee Caramel Mignonne"
    },
    {
        id: "mig9",
        name: "Lime Earlgrey",
        description: "Bánh Mignonne 12cm hương trà Earl Grey thanh tao kết hợp chanh tươi nhẹ nhàng.",
        price: "230,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_f73c28d8eb5b4367888a31b5a2d89d03~mv2.jpg/v1/fill/w_600,h_338,fp_0.50_0.50,lg_1,q_80,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Lime Earlgrey Mignonne"
    },
    {
        id: "mig10",
        name: "Grape cake",
        description: "Bánh Mignonne 12cm trang trí nho tươi mọng nước, kem nhẹ vị nho thanh mát.",
        price: "270,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_b565a5699ccc4c7caa94bef9e11c1f3a~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Grape Cake Mignonne"
    },
    {
        id: "mig11",
        name: "Chocolate cake",
        description: "Bánh Mignonne 12cm thuần chocolate không trang trí thêm, đậm đà và sang trọng.",
        price: "240,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_a76c4d8d27e94d65bdb2be4dd6d0c341~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Chocolate Mignonne"
    },
    {
        id: "mig12",
        name: "Mango cake",
        description: "Bánh Mignonne 12cm trang trí xoài tươi vàng óng, kem xoài ngọt thơm mùa hè.",
        price: "230,000đ",
        category: "mignonne-cake",
        image: "https://static.wixstatic.com/media/6774d8_d1876839a5a243d8a20724f51337e2bc~mv2.png/v1/fill/w_685,h_386,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.png",
        alt: "Mango Mignonne"
    },
    {
        id: "sl1",
        name: "Khay Bánh Cắt",
        description: "Vui lòng liên hệ fan page hoặc instagram của Amélie để được tư vấn thêm về size và giá bánh.",
        price: "Liên hệ",
        category: "event-cake",
        image: "https://static.wixstatic.com/media/6774d8_cf3911ea6e034d5cb495c31119cd7fd6~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Khay Bánh Cắt Mix Vị"
    },
    {
        id: "tt1",
        name: "Bánh hai tầng",
        description: "Vui lòng liên hệ fan page hoặc instagram của Amélie để được tư vấn thêm về size và giá bánh.",
        price: "Liên hệ",
        category: "event-cake",
        image: "https://static.wixstatic.com/media/6774d8_4898d53808114dd2a59eaaf06341c591~mv2.jpg/v1/fill/w_685,h_386,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Placeholder.jpg",
        alt: "Bánh Hai Tầng Sang Trọng"
    }
];
