export const company = {
  shortName: "ООО «РТК»",
  fullName:
    "Общество с ограниченной ответственностью «Региональная транспортная компания»",
  descriptor: "Региональная Транспортная Компания",
  inn: "7840103251",
  ogrn: "1227800155824",
  kpp: "784201001",
  okpo: "71711756",
  okved: "77.39.12",
  phone: "8-812-416-63-61",
  phoneHref: "tel:+78124166361",
  email: "info@rtc-rails.ru",
  addressShort: "Санкт-Петербург, наб. Обводного канала, 93А",
  address:
    "191119, г. Санкт-Петербург, вн. тер. г. муниципальный округ Семёновский, наб. Обводного Канала, д. 93А, литера А, помещ. 5-Н, офис 3/4, №554, 591–599",
  bank: "По запросу",
  companyCard: "/documents/rtk-company-card.pdf",
} as const;

export const navItems = [
  { label: "Парк и услуги", id: "fleet", href: "#fleet" },
  { label: "Реквизиты", id: "details", href: "#details" },
  { label: "Контакты", id: "contacts", href: "#contacts" },
] as const;

export type NavItem = (typeof navItems)[number];
