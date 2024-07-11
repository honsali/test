import { CompanyPage } from 'company/CompanyPage';
import { ConceptPage } from 'concept/ConceptPage';
import { ContactPage } from 'contact/ContactPage';
import { ExperiencePage } from 'experience/ExperiencePage';
import { HomePage } from 'home/HomePage';
import Layout from 'layout/Layout';
import { NewsPage } from 'news/NewsPage';
import { ProductsPage } from 'products/ProductsPage';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ReferencePage } from 'reference/ReferencePage';

export const AppRouter = () => {
    return (
        <BrowserRouter basename="/test">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="company" element={<CompanyPage />} />
                    <Route path="concept" element={<ConceptPage />} />
                    <Route path="product" element={<ProductsPage />} />
                    <Route path="experience" element={<ExperiencePage />} />
                    <Route path="reference" element={<ReferencePage />} />
                    <Route path="news" element={<NewsPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
